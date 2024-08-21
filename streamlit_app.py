# streamlit_app.py
import streamlit as st
from bs4 import BeautifulSoup
import requests
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

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

def fetch_website_content(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raises an HTTPError for bad responses
        soup = BeautifulSoup(response.content, 'html.parser')
        return soup.get_text()
    except requests.RequestException as e:
        st.error(f"Error fetching website content: {e}")
        return ""

def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    stop_words = set(stopwords.words('english'))
    return ' '.join([word for word in tokens if word.isalnum() and word not in stop_words])

def get_most_relevant_content(query, content, top_n=3):
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform([query] + content)
    cosine_similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()
    related_docs_indices = cosine_similarities.argsort()[:-top_n-1:-1]
    return [content[i] for i in related_docs_indices]

def generate_response(query, relevant_content):
    # In a real-world scenario, you would use a more sophisticated language model here
    # For this example, we'll just return the most relevant content
    return "\n\n".join(relevant_content)

# Streamlit UI
st.title("MicorBot - Chat with MICOR Website")

# Fetch and preprocess website content
url = "https://micor.agriculture.gov.au/"
raw_content = fetch_website_content(url)

if raw_content:
    paragraphs = [p for p in raw_content.split('\n') if p.strip()]
    processed_paragraphs = [preprocess_text(p) for p in paragraphs]

    # Chat interface
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    if prompt := st.chat_input("Ask a question about MICOR"):
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)

        # Get relevant content and generate response
        relevant_content = get_most_relevant_content(preprocess_text(prompt), processed_paragraphs)
        response = generate_response(prompt, relevant_content)

        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            st.markdown(response)
        st.session_state.messages.append({"role": "assistant", "content": response})
else:
    st.error("Failed to fetch website content. Please try again later.")