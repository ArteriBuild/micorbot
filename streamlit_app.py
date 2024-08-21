import streamlit as st
import pdfplumber
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from PIL import Image
import numpy as np

# Streamlit configuration
st.set_page_config(page_title="DAFF Policy Impact Analyzer", layout="wide")

# DAFF context information
DAFF_CONTEXT = """
The Department of Agriculture, Fisheries and Forestry (DAFF) is responsible for:

1. Agricultural policy: Developing and implementing policies to support the productivity, profitability, and sustainability of Australia's agricultural, fisheries, and forestry industries.

2. Biosecurity: Protecting Australia's animal and plant health status to maintain overseas markets and protect the economy and environment from pests and diseases.

3. Exports: Supporting agricultural and food exports, including through trade negotiations and market access.

4. Research and innovation: Promoting and funding research, development, and extension in agriculture, fisheries, and forestry.

5. Natural resource management: Developing policies for sustainable management of Australia's natural resources in relation to agriculture.

6. Drought and rural support: Providing assistance to farmers and rural communities affected by drought and other challenges.

7. Fisheries management: Ensuring the sustainable use of Australia's fisheries resources.

8. Forestry: Supporting the sustainable management and use of Australia's forest resources.

Key priorities include:
- Driving innovation and productivity in the agriculture sector
- Strengthening Australia's biosecurity system
- Supporting farmers and rural communities
- Expanding agricultural trade and market access
- Promoting sustainable agriculture and natural resource management
- Developing digital agriculture capabilities
- Managing fisheries for long-term sustainability
"""

# Sample policy text
SAMPLE_POLICY = """
Proposed Policy: Sustainable Agricultural Development and Digital Innovation Initiative

Our policy aims to modernize and sustain Australia's agricultural sector through the following key initiatives:

1. Digital Transformation in Agriculture:
   - Implement a nationwide program to provide high-speed internet access to all rural and remote farming communities.
   - Develop and promote the use of AI-driven farm management systems to optimize crop yields and resource usage.
   - Establish a national agricultural data platform to facilitate information sharing and decision-making among farmers, researchers, and policymakers.

2. Biosecurity Measures:
   - Enhance border control measures to prevent the introduction of invasive species and diseases.
   - Allocate funds for research into new detection technologies for potential biosecurity threats.
   - Conduct regular biosecurity awareness campaigns for farmers and the general public.

3. Sustainable Farming Practices:
   - Introduce incentives for farmers adopting regenerative agriculture techniques.
   - Promote crop diversification and rotation to improve soil health and reduce pest pressures.
   - Encourage the use of precision agriculture technologies to minimize water usage and chemical inputs.

4. Climate Resilience in Agriculture:
   - Develop climate-resistant crop varieties through increased funding for agricultural research.
   - Implement a carbon credit system for farmers who adopt practices that sequester carbon in soil.
   - Establish regional climate adaptation plans for different agricultural zones across Australia.

5. Pacific Region Collaboration:
   - Share agricultural best practices and technologies with Pacific Island nations to enhance their food security.
   - Collaborate on regional biosecurity initiatives to protect shared ecosystems.
   - Provide training and resources to Pacific farmers on sustainable and climate-smart agriculture techniques.

6. Biodiversity and Wildlife Conservation:
   - Create wildlife corridors in agricultural landscapes to support native species movement.
   - Implement a grant program for farmers who protect and restore native habitats on their properties.
   - Develop guidelines for wildlife-friendly farming practices, particularly in areas adjacent to protected habitats.

This policy seeks to balance technological advancement, environmental sustainability, and regional cooperation to ensure a resilient and productive agricultural sector for Australia's future.
"""

def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        return " ".join(page.extract_text() for page in pdf.pages)

def compare_policy_to_document(policy_text, document_text):
    vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1,2), max_features=1000)
    tfidf_matrix = vectorizer.fit_transform([policy_text, document_text])
    similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
    
    feature_names = vectorizer.get_feature_names_out()
    policy_tfidf = tfidf_matrix[0].toarray()[0]
    doc_tfidf = tfidf_matrix[1].toarray()[0]
    
    top_policy_terms = [feature_names[i] for i in policy_tfidf.argsort()[-20:][::-1]]
    top_doc_terms = [feature_names[i] for i in doc_tfidf.argsort()[-20:][::-1]]
    
    common_terms = set(top_policy_terms) & set(top_doc_terms)
    
    return similarity, list(common_terms), top_policy_terms, top_doc_terms

def generate_impact_description(similarity, common_terms):
    if similarity > 0.3:
        impact_level = "High Alignment"
        description = "The proposed policy shows strong alignment with DAFF priorities and strategies."
    elif similarity > 0.2:
        impact_level = "Moderate Alignment"
        description = "The proposed policy shows notable alignment with some DAFF priorities and strategies."
    elif similarity > 0.1:
        impact_level = "Low Alignment"
        description = "The proposed policy shows some alignment with DAFF priorities and strategies, but there are significant differences."
    else:
        impact_level = "Minimal Alignment"
        description = "The proposed policy shows little alignment with current DAFF priorities and strategies."

    if common_terms:
        description += f" Key areas of potential alignment include: {', '.join(common_terms)}."
    else:
        description += " No specific areas of alignment were identified."

    description += " Consider how this alignment (or lack thereof) impacts the policy's effectiveness and comprehensiveness in the context of DAFF's responsibilities."
    
    return impact_level, description

def generate_impact_report(policy_text, document_similarities):
    report = "DAFF Policy Impact Analysis Report\n\n"
    report += f"Policy Text: {policy_text[:200]}...\n\n"
    report += "Impact on DAFF Priorities and Strategies:\n"
    for doc, (similarity, common_terms, top_policy_terms, top_doc_terms) in document_similarities.items():
        impact_level, impact_description = generate_impact_description(similarity, common_terms)
        report += f"- {doc}:\n"
        report += f"  Impact Level: {impact_level}\n"
        report += f"  Similarity Score: {similarity:.2f}\n"
        report += f"  Description: {impact_description}\n"
        report += f"  Key Aligned Terms: {', '.join(common_terms)}\n"
        report += f"  Top Policy Terms: {', '.join(top_policy_terms[:10])}\n"
        report += f"  Top DAFF Priority Terms: {', '.join(top_doc_terms[:10])}\n\n"
    return report

def main():
    logo = Image.open("logo.png")
    st.image(logo, width=200)
    
    st.title("Department of Agriculture, Fisheries and Forestry (DAFF) Policy Impact Analyzer")

    st.write("""
    Welcome to the DAFF Policy Impact Analyzer!

    This app analyzes the potential impact of a proposed policy on key priorities and strategies 
    of the Department of Agriculture, Fisheries and Forestry.

    Here's how it works:
    1. Review the DAFF context information.
    2. Enter your proposed policy text or use the sample policy.
    3. The app compares your policy to DAFF's priorities and strategies using natural language processing.
    4. An impact report is generated, showing how your policy might align with DAFF's focus areas.

    Let's get started!
    """)

    st.subheader("DAFF Context Information")
    st.write(DAFF_CONTEXT)

    st.subheader("Policy Analysis")
    st.write("You can use our sample policy or enter your own:")
    
    if st.button("Use Sample Policy"):
        st.session_state.policy_text = SAMPLE_POLICY
    
    policy_text = st.text_area("Enter your proposed policy text here:", value=st.session_state.get('policy_text', ''), height=300)

    if st.button("Analyze Policy"):
        if policy_text:
            with st.spinner("Analyzing policy impact..."):
                similarity, common_terms, top_policy_terms, top_doc_terms = compare_policy_to_document(policy_text, DAFF_CONTEXT)
                document_similarities = {"DAFF Priorities and Strategies": (similarity, common_terms, top_policy_terms, top_doc_terms)}
                
                report = generate_impact_report(policy_text, document_similarities)
                st.text_area("Impact Report", report, height=400)
                
                # Visualization of impact
                st.subheader("Impact Visualization")
                st.write("DAFF Priorities and Strategies:")
                st.progress(similarity)
                impact_level, _ = generate_impact_description(similarity, common_terms)
                st.write(f"Impact Level: {impact_level}")
                st.write(f"Key Aligned Terms: {', '.join(common_terms)}")
                st.write(f"Top Policy Terms: {', '.join(top_policy_terms[:10])}")
                st.write(f"Top DAFF Priority Terms: {', '.join(top_doc_terms[:10])}")
        else:
            st.warning("Please enter policy text to analyze.")

    st.write("""
    Note: This analysis uses natural language processing to compare your policy text with 
    DAFF's priorities and strategies. The results should be interpreted as potential impacts 
    and used as a starting point for further, more detailed analysis by domain experts.
    """)

if __name__ == "__main__":
    main()
