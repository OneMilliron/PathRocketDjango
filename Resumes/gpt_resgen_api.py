import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def generate_resume(profile, job=None):
    name = f"{profile.user.first_name} {profile.user.last_name}".strip()
    education = profile.education or "N/A"
    experience = profile.experience or "N/A"
    skills = profile.skills or "N/A"
    summary = profile.summary or "N/A"

    job_title = job.get('title') if job else None
    job_company = job.get('company') if job else None
    job_desc = job.get('description') if job else None

    prompt = f"""
You are a professional resume generator.

Generate a clean, ATS-friendly resume in plain text format based on this user's profile.

Name: {name}
Education: {education}
Experience: {experience}
Skills: {skills}
Summary: {summary}
"""

    if job_title:
        prompt += f"\nThe user is applying for the position: {job_title}"
    if job_company:
        prompt += f" at {job_company}."
    if job_desc:
        prompt += f"\nJob Description: {job_desc}"

    prompt += "\nFormat the resume with clear headings and bullet points."

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    return response.choices[0].message.content.strip()
