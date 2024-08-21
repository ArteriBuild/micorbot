import streamlit as st
from transformers import T5ForConditionalGeneration, T5Tokenizer
from duckduckgo_search import DDGS
import torch
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

# Initialize T5 model and tokenizer
@st.cache_resource
def load_model():
    model = T5ForConditionalGeneration.from_pretrained('t5-small')
    tokenizer = T5Tokenizer.from_pretrained('t5-small')
    return model, tokenizer

model, tokenizer = load_model()

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []

@st.cache_data(ttl=3600)  # Cache for 1 hour
def search_micor(query):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(f"{query} MICOR Australia exporting requirements", max_results=3))
        return results
    except Exception as e:
        logging.error(f"Error performing search: {e}")
        return []

def generate_response(query):
    # Perform a search to get context
    search_results = search_micor(query)
    
    # Prepare the context from search results
    context = "\n".join([f"Title: {result['title']}\nContent: {result['body']}" for result in search_results])
    
    # Prepare the input for T5
    input_text = f"question: {query} context: {context}"
    
    # Tokenize and generate
    input_ids = tokenizer.encode(input_text, return_tensors="pt", max_length=512, truncation=True)
    
    try:
        with torch.no_grad():
            outputs = model.generate(input_ids, max_length=150, num_return_sequences=1, no_repeat_ngram_size=2)
        
        answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
        
        return f"{answer}\n\nPlease note: While I strive to provide accurate information, always verify critical details with the official MICOR website or Australian government sources for the most up-to-date and comprehensive export requirements."
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        return "I apologize, but I encountered an error while generating a response. Please try asking your question again or rephrase it slightly."

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