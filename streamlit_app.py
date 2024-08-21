import streamlit as st
import openai
from duckduckgo_search import DDGS
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

# Initialize OpenAI API
openai.api_key = st.secrets["OPENAI_API_KEY"]

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

@st.cache_data(ttl=3600)  # Cache for 1 hour
def search_micor(query):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(f"{query} MICOR Australia exporting requirements", max_results=3))
        return results
    except Exception as e:
        logging.error(f"Error performing search: {e}")
        return []

def generate_response(query):
    # Perform a search to get context
    search_results = search_micor(query)
    
    # Prepare the context from search results
    context = "\n".join([f"Title: {result['title']}\nContent: {result['body']}" for result in search_results])
    
    # Prepare the prompt for GPT
    prompt = f"""You are an AI assistant specializing in Australian export requirements and the Manual of Importing Country Requirements (MICOR). 
    Use the following context to answer the user's question. If the information is not in the context, use your general knowledge about MICOR and Australian export requirements.
    Always strive to provide specific, accurate information, but also mention when information might not be up-to-date or if official verification is recommended.

    Context:
    {context}

    User question: {query}

    Please provide a direct and specific answer to the user's question."""

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that provides information about MICOR and Australian export requirements."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            n=1,
            stop=None,
            temperature=0.7,
        )
        
        answer = response.choices[0].message['content'].strip()
        return answer + "\n\nPlease note: While I strive to provide accurate information, always verify critical details with the official MICOR website or Australian government sources for the most up-to-date and comprehensive export requirements."
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        return "I apologize, but I encountered an error while generating a response. Please try asking your question again or rephrase it slightly."

# Streamlit UI
st.title("MicorBot - Australian Export Requirements Assistant")

st.info("This app provides information about MICOR (Manual of Importing Country Requirements) and Australian export requirements. Always verify information with official sources.")

# Chat interface
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Ask about Australian export requirements or MICOR"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # Generate response
    response = generate_response(prompt)

    # Display assistant response in chat message container
    with st.chat_message("assistant"):
        st.markdown(response)
    st.session_state.messages.append({"role": "assistant", "content": response})

# Add a button to clear the chat history
if st.button("Clear Chat History"):
    st.session_state.messages = []
    st.experimental_rerun()