import requests
from django.core.management.base import BaseCommand
from Jobs.models import Job

APP_ID = "5cdd46f8"
APP_KEY = "7e0202fea9269676dd32a5fa69f7b530"

class Command(BaseCommand):
    help = 'Fetch jobs from Adzuna API and store them in the database'

    def handle(self, *args, **kwargs):
        url = "https://api.adzuna.com/v1/api/jobs/us/search/1"
        params = {
            "app_id": APP_ID,
            "app_key": APP_KEY,
            "results_per_page": 10,
            "what": "software engineer",
            "where": "new york"
        }

        response = requests.get(url, params=params)
        data = response.json()

        for result in data.get("results", []):
            Job.objects.update_or_create(
                title=result.get("title", ""),
                company=result.get("company", {}).get("display_name", ""),
                location=result.get("location", {}).get("display_name", ""),
                defaults={
                    "description": result.get("description", ""),
                    "redirect_url": result.get("redirect_url", ""),
                    "salary_min": result.get("salary_min"),
                    "salary_max": result.get("salary_max"),
                }
            )

        self.stdout.write(self.style.SUCCESS("✅ Jobs fetched and stored successfully."))
