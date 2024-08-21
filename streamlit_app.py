import streamlit as st
from duckduckgo_search import DDGS
import string
import re
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

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
    # Convert to lowercase and remove punctuation
    text = text.lower()
    text = text.translate(str.maketrans("", "", string.punctuation))
    # Split into words
    words = text.split()
    # Remove common English stop words
    stop_words = set(['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"])
    return [word for word in words if word not in stop_words]

def simple_sentence_tokenize(text):
    # Split text into sentences based on common sentence-ending punctuation
    return re.split(r'(?<=[.!?])\s+', text)

def extract_relevant_sentences(query, text):
    query_tokens = set(preprocess_text(query))
    sentences = simple_sentence_tokenize(text)
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