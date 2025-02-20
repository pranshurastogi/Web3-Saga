import requests
from bs4 import BeautifulSoup

# Configuration for each job category.
job_configs = [
    {
        "doc_path": "docs/Career/Business-Development.md",
        "url": "https://web3.career/business-development-jobs",
        "front_matter": """---
title: "Business Development"
sidebar_position: 1
---"""
    },
    {
        "doc_path": "docs/Career/DevRel.md",
        "url": "https://web3.career/developer-relations-jobs",
        "front_matter": """---
title: "DevRel"
sidebar_position: 2
---"""
    },
    {
        "doc_path": "docs/Career/Ecosystem-Developer.md",
        "url": "https://web3.career/growth-jobs",
        "front_matter": """---
title: "Ecosystem Developer"
sidebar_position: 3
---"""
    },
    {
        "doc_path": "docs/Career/Marketing-Manager.md",
        "url": "https://web3.career/marketing-jobs",
        "front_matter": """---
title: "Marketing Manager"
sidebar_position: 4
---"""
    },
    {
        "doc_path": "docs/Career/Smart-Contract-Engineer.md",
        "url": "https://web3.career/smart-contract-jobs",
        "front_matter": """---
title: "Smart Contract Engineer"
sidebar_position: 5
---"""
    }
]

class Web3CareerScraper:
    def __init__(self, url):
        self.url = url

    def scrape_jobs(self):
        response = requests.get(self.url)
        if response.status_code != 200:
            print(f"Error fetching {self.url}: {response.status_code}")
            return []
        
        soup = BeautifulSoup(response.text, 'html.parser')
        rows = soup.find_all("tr", class_="table_row")
        jobs = []

        for row in rows:
            tds = row.find_all("td")
            if len(tds) < 6:
                continue

            # Extract job title and link from the first <td>.
            title_tag = tds[0].find("h2")
            title = title_tag.get_text(strip=True) if title_tag else "N/A"
            a_tag = tds[0].find("a", href=True)
            link = a_tag['href'] if a_tag else "N/A"
            if link.startswith('/'):
                link = "https://web3.career" + link

            # Extract company (or location) from the second <td>.
            company_tag = tds[1].find("h3")
            company = company_tag.get_text(strip=True) if company_tag else "N/A"

            # Extract posted time from the third <td>.
            time_tag = tds[2].find("time")
            posted_time = time_tag.get_text(strip=True) if time_tag else "N/A"

            # Extract remote info from the fourth <td>.
            remote_span = tds[3].find("span")
            remote_info = remote_span.get_text(strip=True) if remote_span else "N/A"

            # Extract salary details from the fifth <td>.
            salary_tag = tds[4].find("p")
            salary = salary_tag.get_text(strip=True) if salary_tag else "N/A"

            # Extract job tags from the sixth <td>.
            tags = []
            tag_td = tds[5]
            tag_links = tag_td.find_all("a")
            for tag in tag_links:
                tags.append(tag.get_text(strip=True))

            jobs.append({
                "title": title,
                "link": link,
                "company": company,
                "posted_time": posted_time,
                "remote": remote_info,
                "salary": salary,
                "tags": tags
            })

        return jobs[:10]


def create_markdown_content(front_matter, jobs):
    md = front_matter.strip() + "\n\n"
    # md += "## Latest 10 Jobs\n\n"
    md += "| Job Title | Company | Posted Time | Remote | Salary | Tags | Apply Link |\n"
    md += "|-----------|---------|-------------|--------|--------|------|------------|\n"
    for job in jobs:
        tags = ", ".join(job['tags']) if job['tags'] else ""
        md += (
            f"| {job['title']} | {job['company']} | {job['posted_time']} | "
            f"{job['remote']} | {job['salary']} | {tags} | [Apply]({job['link']}) |\n"
        )
    return md


def main():
    for config in job_configs:
        print(f"Scraping {config['url']}...")
        scraper = Web3CareerScraper(config['url'])
        jobs = scraper.scrape_jobs()
        if not jobs:
            print(f"No jobs found for {config['url']}")
            continue

        md_content = create_markdown_content(config['front_matter'], jobs)
        with open(config['doc_path'], 'w', encoding='utf-8') as f:
            f.write(md_content)
        print(f"Markdown file generated at {config['doc_path']}")

if __name__ == '__main__':
    main()
