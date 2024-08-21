import streamlit as st
import google.generativeai as genai
from duckduckgo_search import DDGS
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

# Initialize Gemini API
genai.configure(api_key=st.secrets["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-pro')

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

@st.cache_data(ttl=3600)  # Cache for 1 hour
def search_australian_exports(query):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(f"{query} Australia export", max_results=3))
        return results
    except Exception as e:
        logging.error(f"Error performing search: {e}")
        return []

def generate_response(query):
    search_results = search_australian_exports(query)
    
    context = "Recent search results (use if relevant):\n" + "\n".join([f"- {result['title']}" for result in search_results])
    
    prompt = f"""You are an AI assistant specializing in Australian exports, trade regulations, and related topics. 
    Answer the user's question about Australian exports or regulations. Use your knowledge to provide accurate and up-to-date information.
    If you don't have specific information, provide general guidance and suggest reliable sources for more details.
    Always focus on Australian context in your answers.

    Recent context (use only if directly relevant):
    {context}

    User question: {query}

    Please provide a direct, informative answer to the user's question, focusing on Australian context and information."""

    try:
        response = model.generate_content(prompt)
        answer = response.text
        return answer + "\n\nPlease note: While I strive to provide accurate information, always verify critical details with official Australian government sources for the most up-to-date and comprehensive information on exports and regulations."
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        return "I apologize, but I encountered an error while generating a response. Please try asking your question again or rephrase it slightly."

# Streamlit UI
st.title("AusExportBot - Australian Export Information Assistant")

st.info("This app provides general information about Australian exports, trade regulations, and related topics. Always verify information with official Australian government sources.")

# Chat interface
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Ask about Australian exports, trade regulations, or related topics"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # Generate response
    with st.spinner("Generating response..."):
        response = generate_response(prompt)

    # Display assistant response in chat message container
    with st.chat_message("assistant"):
        st.markdown(response)
    st.session_state.messages.append({"role": "assistant", "content": response})

# Add a button to clear the chat history
if st.button("Clear Chat History"):
    st.session_state.messages = []
    st.experimental_rerun()