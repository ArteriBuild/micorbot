import streamlit as st
from duckduckgo_search import DDGS
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
import string
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

# Download necessary NLTK data
@st.cache_resource
def download_nltk_data():
    try:
        nltk.data.find('tokenizers/punkt')
        nltk.data.find('corpora/stopwords')
    except LookupError:
        nltk.download('punkt')
        nltk.download('stopwords')

# Try to download NLTK data, but continue even if it fails
try:
    download_nltk_data()
    USE_NLTK = True
except Exception as e:
    logging.error(f"Failed to download NLTK data: {e}")
    USE_NLTK = False

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

@st.cache_data(ttl=3600)  # Cache for 1 hour
def search_micor(query):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(f"{query} MICOR Australia exporting requirements", max_results=5))
        return results
    except Exception as e:
        logging.error(f"Error performing search: {e}")
        return []

def preprocess_text(text):
    if USE_NLTK:
        # Tokenize the text into words
        tokens = word_tokenize(text.lower())
        # Remove punctuation and stopwords
        stop_words = set(stopwords.words('english'))
        tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
    else:
        # Fallback to basic preprocessing if NLTK is not available
        tokens = text.lower().split()
        tokens = [word.strip(string.punctuation) for word in tokens if word.strip(string.punctuation)]
    return tokens

def extract_relevant_sentences(query, text):
    query_tokens = set(preprocess_text(query))
    if USE_NLTK:
        sentences = sent_tokenize(text)
    else:
        # Fallback to basic sentence splitting if NLTK is not available
        sentences = text.split('.')
    relevant_sentences = []
    
    for sentence in sentences:
        sentence_tokens = set(preprocess_text(sentence))
        if query_tokens.intersection(sentence_tokens):
            relevant_sentences.append(sentence)
    
    return relevant_sentences

def generate_response(query):
    search_results = search_micor(query)
    if not search_results:
        return "I'm sorry, but I couldn't find any relevant information for your query. Please try rephrasing your question or ask about a different topic related to MICOR or Australian export requirements."
    
    all_text = " ".join([result['body'] for result in search_results])
    relevant_sentences = extract_relevant_sentences(query, all_text)
    
    if not relevant_sentences:
        return "I found some information, but it doesn't seem to directly answer your question. Here's a summary of what I found:\n\n" + "\n\n".join([result['body'] for result in search_results[:2]])
    
    response = "Based on the information I found, here's what I can tell you:\n\n"
    response += " ".join(relevant_sentences[:5])  # Limit to first 5 relevant sentences
    
    response += "\n\nHere are some sources for more information:\n"
    for result in search_results[:3]:
        response += f"- {result['title']}: {result['href']}\n"
    
    response += "\nPlease note: While I strive to provide accurate information, always verify critical details with the official MICOR website or Australian government sources for the most up-to-date and comprehensive export requirements."
    
    return response

# Streamlit UI
st.title("MicorBot - Australian Export Requirements Assistant")

if not USE_NLTK:
    st.warning("Running in limited mode. Some features may not be available.")

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