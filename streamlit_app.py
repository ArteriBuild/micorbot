import streamlit as st
import google.generativeai as genai
from bs4 import BeautifulSoup
import re
import os
import pickle
from datetime import datetime, timedelta

# Set up logging
import logging
logging.basicConfig(level=logging.INFO)

# Initialize Gemini API
genai.configure(api_key=st.secrets["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-pro')

# Directory containing HTML files
HTML_DIR = "micor_html"

# File to store the index
INDEX_FILE = "micor_index.pickle"

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

def read_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def create_index(html_dir):
    index = {}
    for filename in os.listdir(html_dir):
        if filename.endswith('.html'):
            file_path = os.path.join(html_dir, filename)
            content = read_html_file(file_path)
            soup = BeautifulSoup(content, 'html.parser')
            text = soup.get_text().lower()
            words = set(re.findall(r'\w+', text))
            for word in words:
                if word not in index:
                    index[word] = set()
                index[word].add(filename)
    return index

@st.cache_resource
def load_or_create_index():
    if os.path.exists(INDEX_FILE) and datetime.now() - datetime.fromtimestamp(os.path.getmtime(INDEX_FILE)) < timedelta(days=1):
        with open(INDEX_FILE, 'rb') as f:
            return pickle.load(f)
    else:
        index = create_index(HTML_DIR)
        with open(INDEX_FILE, 'wb') as f:
            pickle.dump(index, f)
        return index

def search_micor_content(query, index):
    query_words = set(re.findall(r'\w+', query.lower()))
    relevant_files = set.union(*[index.get(word, set()) for word in query_words])
    
    relevant_content = []
    for filename in relevant_files:
        file_path = os.path.join(HTML_DIR, filename)
        content = read_html_file(file_path)
        soup = BeautifulSoup(content, 'html.parser')
        text_content = soup.get_text()
        
        if any(word in text_content.lower() for word in query_words):
            relevant_content.append({
                'title': soup.title.string if soup.title else filename,
                'content': text_content[:500],  # First 500 characters as a preview
                'file': filename
            })
    
    return relevant_content[:3]  # Return top 3 most relevant results

def generate_response(query, index):
    search_results = search_micor_content(query, index)
    
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

# Load or create the index
index = load_or_create_index()

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
        response = generate_response(prompt, index)

    # Display assistant response in chat message container
    with st.chat_message("assistant"):
        st.markdown(response)
    st.session_state.messages.append({"role": "assistant", "content": response})

# Add a button to clear the chat history
if st.button("Clear Chat History"):
    st.session_state.messages = []
    st.experimental_rerun()
