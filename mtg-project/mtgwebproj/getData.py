import requests
import BeautifulSoup

url = 'https://www.moxfield.com/decks/pnGkUqRJ5EyzT3J7OSlWeg'

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')

    titles = soup.find_all('h2', class_='post-title')

    for title in titles:
        print(title.get_text(strip=True))
else:
    print(f'Failed to retrieve the webpage. Status code: {response.status_code}')
