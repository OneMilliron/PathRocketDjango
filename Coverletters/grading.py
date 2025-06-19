import json
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def grade_uploaded_pdf(text):
    prompt = f"""
You are a professional resume and cover letter grader.

Given the content below, return the following as JSON:
- "grade": A letter grade from A+ to F
- "feedback": Concise but constructive feedback (3-5 sentences)
- "word_count": The number of words in the document

Do not add commentary outside the JSON. Only return the JSON object.

-------------
Document Text:
{text}
"""

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.4,
    )

    content = response.choices[0].message.content.strip()

    try:
        result = json.loads(content)
    except json.JSONDecodeError:
        raise ValueError("Failed to parse GPT response as JSON:\n" + content)

    return result
