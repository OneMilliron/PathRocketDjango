# jobs/api_fetchers/remotive.py
import requests

def fetch_remotive_jobs():
    url = "https://remotive.io/api/remote-jobs"
    res = requests.get(url)
    jobs = res.json().get("jobs", [])
    return [
        {
            "title": job["title"],
            "company": job["company_name"],
            "location": job["candidate_required_location"],
            "url": job["url"],
            "description": job["description"],
            "date_posted": job["publication_date"],
            "remote": True,
            "source": "Remotive"
        }
        for job in jobs
    ]
