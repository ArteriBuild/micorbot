import streamlit as st
from duckduckgo_search import DDGS
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

# Function to download NLTK data
@st.cache_resource
def download_nltk_data():
    try:
        nltk.data.find('tokenizers/punkt')
        nltk.data.find('corpora/stopwords')
    except LookupError:
        nltk.download('punkt')
        nltk.download('stopwords')

# Call the function to download NLTK data
download_nltk_data()

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

@st.cache_data(ttl=3600)  # Cache for 1 hour
def search_micor(query):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(f"{query} MICOR Australia importing requirements", max_results=5))
        return results
    except Exception as e:
        logging.error(f"Error performing search: {e}")
        return []

def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    stop_words = set(stopwords.words('english'))
    return ' '.join([word for word in tokens if word.isalnum() and word not in stop_words])

def generate_response(query):
    search_results = search_micor(query)
    
    if not search_results:
        return "I'm sorry, I couldn't find any relevant information for your query. Please try rephrasing your question or asking about a different aspect of MICOR or Australian importing requirements."
    
    response = "Here's what I found based on your query about MICOR and Australian importing requirements:\n\n"
    for i, result in enumerate(search_results, 1):
        response += f"{i}. {result['title']}\n"
        response += f"   {result['body']}\n"
        response += f"   Source: {result['href']}\n\n"
    
    response += "\nPlease note that while I strive to provide accurate information, always verify with the official MICOR website or Australian government sources for the most up-to-date and comprehensive information on importing requirements."
    return response

# Streamlit UI
st.title("MicorBot - Chat about MICOR and Australian Importing Requirements")

st.info("This app provides information about MICOR (Manual of Importing Country Requirements) and Australian importing requirements based on internet searches. Always verify information with official sources.")

# Chat interface
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Ask a question about MICOR or Australian importing requirements"):
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