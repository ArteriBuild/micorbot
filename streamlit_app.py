import streamlit as st
import requests
from bs4 import BeautifulSoup
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
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

# Cache the fetched data
@st.cache_data
def fetch_micor_data():
    url = "https://web.archive.org/web/20230830061021/https://micor.agriculture.gov.au/Pages/default.aspx"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()  # Raises an HTTPError for bad responses
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract relevant information from the page
        main_content = soup.find('div', {'id': 'ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField'})
        
        if main_content:
            paragraphs = main_content.find_all('p')
            data = [p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True)]
            if not data:
                logging.warning("No paragraphs found in the main content.")
                return ["No content found. The page structure might have changed."]
        else:
            logging.warning("Main content div not found.")
            return ["Unable to locate the main content on the page."]
        
        return data
    except requests.RequestException as e:
        logging.error(f"Error fetching data: {e}")
        return [f"Error fetching MICOR data: {e}"]

# Fetch MICOR data
micor_data = fetch_micor_data()

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

def generate_response(query):
    if len(micor_data) == 1 and micor_data[0].startswith("Error fetching MICOR data"):
        return micor_data[0] + " Please try again later or contact support if the problem persists."
    
    relevant_content = get_most_relevant_content(query, micor_data)
    if not relevant_content:
        return "I'm sorry, I couldn't find any relevant information for your query. Please try asking about general MICOR information or rephrase your question."
    
    response = "Here's what I found based on your query:\n\n"
    for i, content in enumerate(relevant_content, 1):
        response += f"{i}. {content}\n\n"
    response += "\nPlease note that this information is based on an archived version of the MICOR website from August 30, 2023. For the most up-to-date and comprehensive information, please visit the official MICOR website."
    return response

# Streamlit UI
st.title("MicorBot - Chat about MICOR")

st.info("This app provides information based on an archived version of the MICOR website from August 30, 2023. While we strive for accuracy, always verify with the official MICOR website for the most current information.")

# Display a warning if there was an error fetching data
if len(micor_data) == 1 and micor_data[0].startswith("Error fetching MICOR data"):
    st.warning(micor_data[0])

# Chat interface
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Ask a question about MICOR"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # Generate response
    response = generate_response(prompt)

    # Display assistant response in chat message container
    with st.chat_message("assistant"):
        st.markdown(response)
    st.session_state.messages.append({"role": "assistant", "content": response})

# Add a button to manually refresh the data
if st.button("Refresh MICOR Data"):
    st.cache_data.clear()
    st.experimental_rerun()