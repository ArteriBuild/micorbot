import streamlit as st
import google.generativeai as genai
from bs4 import BeautifulSoup
import re
import os
import pickle
from datetime import datetime, timedelta

# ... [previous code remains the same] ...

def read_html_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
    except UnicodeDecodeError:
        with open(file_path, 'r', encoding='iso-8859-1') as file:
            content = file.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Extract text from specific tags, preserving some structure
    extracted_text = []
    for tag in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li']):
        if tag.name.startswith('h'):
            extracted_text.append(f"\n{tag.name.upper()}: {tag.get_text(strip=True)}")
        else:
            extracted_text.append(tag.get_text(strip=True))
    
    return '\n'.join(extracted_text)

def create_index(html_dir):
    index = {}
    file_contents = {}
    
    # ... [debug prints remain the same] ...
    
    for filename in os.listdir(html_dir):
        if filename.endswith('.html'):
            file_path = os.path.join(html_dir, filename)
            content = read_html_file(file_path)
            if content:
                text = content.lower()
                words = set(re.findall(r'\w+', text))
                for word in words:
                    if word not in index:
                        index[word] = set()
                    index[word].add(filename)
                file_contents[filename] = content  # Store the full extracted content
            else:
                st.sidebar.write(f"Warning: Could not read content of {filename}")
    return index, file_contents

def search_micor_content(query, index, file_contents):
    query_words = set(re.findall(r'\w+', query.lower()))
    relevant_files = set.union(*[index.get(word, set()) for word in query_words])
    
    relevant_content = []
    for filename in relevant_files:
        text_content = file_contents.get(filename, '')
        
        if any(word in text_content.lower() for word in query_words):
            relevant_content.append({
                'title': filename,
                'content': text_content,
                'file': filename
            })
    
    return relevant_content

def generate_response(query, index, file_contents):
    search_results = search_micor_content(query, index, file_contents)
    
    # Debugging information
    st.sidebar.write("Query Debug Information:")
    st.sidebar.write(f"Query: {query}")
    st.sidebar.write(f"Number of relevant files found: {len(search_results)}")
    for result in search_results:
        st.sidebar.write(f"File: {result['file']}")
        st.sidebar.write(f"Content preview: {result['content'][:500]}...")
        st.sidebar.write("---")
    
    if not search_results:
        prompt = f"""You are an AI assistant specializing in Australian exports. The user has asked about "{query}", but no specific information was found in the Manual of Importing Country Requirements (MICOR).

        Please provide a helpful response that:
        1. Acknowledges that MICOR might not cover this specific topic or that the information might not be available in our current dataset.
        2. Offers general guidance about Australian exports related to the query if possible.
        3. Suggests alternative resources or departments that might have relevant information.
        4. Encourages the user to check the official Australian government export websites for the most up-to-date information.

        Ensure your response is informative and helpful, even without specific MICOR data."""
    else:
        context = "Relevant information from MICOR:\n" + "\n\n".join([f"File: {result['file']}\n{result['content']}" for result in search_results])
        
        prompt = f"""You are an AI assistant specializing in the Manual of Importing Country Requirements (MICOR) for Australian exports. 
        Use the following context from MICOR to answer the user's question. Focus on providing accurate information about exporting plants and plant products from Australia.
        If the context doesn't contain all the necessary information, use your general knowledge about Australian export requirements to supplement your answer.
        Always strive to provide specific, accurate information, but also mention when information might not be up-to-date or if official verification is recommended.

        Context:
        {context}

        User question: {query}

        Please provide a direct and specific answer to the user's question, focusing on MICOR and Australian export requirements. Include relevant details from the context, such as specific requirements, procedures, or restrictions for exporting to the queried country or product."""

    try:
        response = model.generate_content(prompt)
        answer = response.text
        return answer + "\n\nPlease note: While I strive to provide accurate information, always verify critical details with the official MICOR website or relevant Australian government sources for the most up-to-date and comprehensive export requirements."
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        return "I apologize, but I encountered an error while generating a response. Please try asking your question again or rephrase it slightly."

# ... [rest of the code remains the same] ...
