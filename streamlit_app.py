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
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except UnicodeDecodeError:
        # If UTF-8 fails, try with ISO-8859-1 encoding
        with open(file_path, 'r', encoding='iso-8859-1') as file:
            return file.read()
    except Exception as e:
        logging.error(f"Error reading file {file_path}: {e}")
        return None

def create_index(html_dir):
    index = {}
    file_contents = {}
    
    # Debug: Print current working directory and HTML_DIR path
    st.sidebar.write(f"Current working directory: {os.getcwd()}")
    st.sidebar.write(f"HTML_DIR path: {os.path.abspath(html_dir)}")
    
    # Debug: List contents of HTML_DIR
    st.sidebar.write("Contents of HTML_DIR:")
    try:
        for item in os.listdir(html_dir):
            st.sidebar.write(f"- {item}")
    except Exception as e:
        st.sidebar.write(f"Error listing directory contents: {e}")
    
    for filename in os.listdir(html_dir):
        if filename.endswith('.html'):
            file_path = os.path.join(html_dir, filename)
            content = read_html_file(file_path)
            if content:
                soup = BeautifulSoup(content, 'html.parser')
                text = soup.get_text().lower()
                words = set(re.findall(r'\w+', text))
                for word in words:
                    if word not in index:
                        index[word] = set()
                    index[word].add(filename)
                file_contents[filename] = text[:1000]  # Store first 1000 characters for debugging
            else:
                st.sidebar.write(f"Warning: Could not read content of {filename}")
    return index, file_contents

@st.cache_resource
def load_or_create_index():
    if os.path.exists(INDEX_FILE) and datetime.now() - datetime.fromtimestamp(os.path.getmtime(INDEX_FILE)) < timedelta(days=1):
        with open(INDEX_FILE, 'rb') as f:
            return pickle.load(f)
    else:
        index, file_contents = create_index(HTML_DIR)
        with open(INDEX_FILE, 'wb') as f:
            pickle.dump((index, file_contents), f)
        return index, file_contents

# ... [rest of the code remains the same] ...

# Load or create the index
index, file_contents = load_or_create_index()

# Streamlit UI
st.title("MicorBot - Australian Export Requirements Assistant")

st.info("This app provides information about the Manual of Importing Country Requirements (MICOR) for Australian exports. Always verify information with the official MICOR website.")

# Debug information
st.sidebar.write("Debug Information:")
st.sidebar.write(f"Total files in index: {len(file_contents)}")
st.sidebar.write("Files in index:")
for filename in file_contents.keys():
    st.sidebar.write(f"- {filename}")

# ... [rest of the UI code remains the same] ...

# Add a button to force index recreation
if st.sidebar.button("Recreate Index"):
    if os.path.exists(INDEX_FILE):
        os.remove(INDEX_FILE)
    st.cache_resource.clear()
    st.experimental_rerun()
