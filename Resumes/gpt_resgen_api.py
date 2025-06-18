import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_resume(name, email, phone, linkedin, education, experience, skills, summary, additional_info, languages, job=None, is_tailored=False):
    job_title = job.get('title', '') if job else ''
    job_company = job.get('company', '') if job else ''
    job_desc = job.get('description', '') if job else ''

    prompt = f"""You are a professional resume generator.

Generate a clean, ATS-friendly resume in plain text format using only the user-provided data. DO NOT FABRICATE DATES, AWARDS OR OTHER THINGS. Make whatever the user listed sound impressive but do not hallucinate anything.

----------------
Name: {name}
----------------

----------------
Contact Details
----------------
Email: {email}
Phone: {phone}
LinkedIn: {linkedin}

----------------
Professional Summary
----------------
{summary}

----------------
Education
----------------
{education}

----------------
Professional Experience
----------------
{experience}

----------------
Skills
----------------
{skills}

----------------
Languages
----------------
{languages}

----------------
Additional Information
----------------
{additional_info}
"""

    if is_tailored and job_title and job_company:
        prompt += f"""

The user is applying for the position: {job_title} at {job_company}.

Job Description: {job_desc}

Tailor the resume to emphasize alignment with this job. Use relevant keywords and match tone and focus of the job description. Don't invent credentials.
"""

    prompt += "\nFormat with clear headings and bullet points. Do not make up fake jobs, universities, or skills."

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    return response.choices[0].message.content.strip()
