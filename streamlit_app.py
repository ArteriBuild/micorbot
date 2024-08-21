import streamlit as st
import google.generativeai as genai
from bs4 import BeautifulSoup
import requests
import re

# Set up logging
import logging
logging.basicConfig(level=logging.INFO)

# Initialize Gemini API
genai.configure(api_key=st.secrets["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-pro')

# MICOR demo website URL
BASE_URL = "https://arteribuild.github.io/micordemo/micor.agriculture.gov.au/"

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

@st.cache_data(ttl=3600)
def get_micor_pages():
    pages = [
        "Pages/default.html",
        "Plants/default.html",
        "Plants/Fruit/default.html",
        "Plants/Fruit/Fresh/default.html",
        "Plants/Grain/default.html",
        "Plants/Horticulture/default.html",
        "Plants/Seeds/default.html",
    ]
    return pages

def fetch_page_content(page_url):
    full_url = BASE_URL + page_url
    response = requests.get(full_url)
    if response.status_code == 200:
        return response.text
    else:
        logging.error(f"Failed to fetch {full_url}: {response.status_code}")
        return None

def search_micor_website(query):
    relevant_content = []
    pages = get_micor_pages()
    
    for page in pages:
        content = fetch_page_content(page)
        if content:
            soup = BeautifulSoup(content, 'html.parser')
            text_content = soup.get_text()
            
            # Simple relevance check (can be improved)
            if re.search(r'\b' + re.escape(query) + r'\b', text_content, re.IGNORECASE):
                relevant_content.append({
                    'title': soup.title.string if soup.title else page,
                    'content': text_content[:500],  # First 500 characters as a preview
                    'url': BASE_URL + page
                })
    
    return relevant_content[:3]  # Return top 3 most relevant results

def generate_response(query):
    search_results = search_micor_website(query)
    
    context = "Relevant information from MICOR:\n" + "\n".join([f"- {result['title']}: {result['content']}" for result in search_results])
    
    prompt = f"""You are an AI assistant specializing in the Manual of Importing Country Requirements (MICOR) for Australian exports. 
    Use the following context from MICOR to answer the user's question. Focus on providing accurate information about exporting plants and plant products from Australia.
    If the context doesn't contain relevant information, use your general knowledge about MICOR and Australian export requirements.
    Always strive to provide specific, accurate information, but also mention when information might not be up-to-date or if official verification is recommended.

    Context:
    {context}

    User question: {query}

    Please provide a direct and specific answer to the user's question, focusing on MICOR and Australian export requirements."""

    try:
        response = model.generate_content(prompt)
        answer = response.text
        return answer + "\n\nPlease note: While I strive to provide accurate information, always verify critical details with the official MICOR website for the most up-to-date and comprehensive export requirements."
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        return "I apologize, but I encountered an error while generating a response. Please try asking your question again or rephrase it slightly."

# Streamlit UI
st.title("MicorBot - Australian Export Requirements Assistant")

st.info("This app provides information about the Manual of Importing Country Requirements (MICOR) for Australian exports. Always verify information with the official MICOR website.")

# Chat interface
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Ask about MICOR or Australian export requirements"):
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
