from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
import re
from bs4 import BeautifulSoup
import json

# Function to process a single URL
def process_deck_url(url):
    options = Options()
    options.headless = False  # Set to False to see the browser window

    # Initialize the Chrome driver
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

    # Maximize the browser window
    driver.maximize_window()

    driver.get(url)

    # Wait for the dropdown to be present and visible
    wait = WebDriverWait(driver, 4)
    select_element = wait.until(EC.visibility_of_element_located((By.ID, 'viewMode')))

    # Use Select to choose the desired option
    select = Select(select_element)
    select.select_by_visible_text('Visual Spoiler')

    # Wait for the page to update after selection
    time.sleep(2)

    # Get page source after selection
    page_source = driver.page_source
    driver.quit()

    soup = BeautifulSoup(page_source, 'html.parser')

    # Get and clean the deck name
    deck_name_span = soup.find('span', class_='deckheader-name')
    deck_name = deck_name_span.get_text(strip=True) if deck_name_span else 'No deck name found'
    cleaned_deck_name = re.sub(r'\s*\(.*?\)\s*', '', deck_name)
    cleaned_deck_name = cleaned_deck_name.replace(' ', '-')

    print(f"Processing deck: {cleaned_deck_name}")

    # Find all img tags within any div with class 'img-card-visual'
    images = soup.find_all('div', class_='img-card-visual')

    # Create a list to hold the image data
    image_data = []

    # Iterate through each div and extract image details
    for div in images:
        # Find all img tags within this div
        img_tags = div.find_all('img')
        for img in img_tags:
            img_src = img['src']
            img_alt = img.get('alt', 'No alt text found')

            # Append the image data as a dictionary
            image_data.append({
                'Image Source': img_src,
                'Alt Text': img_alt
            })

    # Create a dynamic file path using the cleaned deck name
    file_path = rf"C:/Users/Steven/Desktop/mtgdeck_data/{cleaned_deck_name}.json"

    # Write the image data to a JSON file using the dynamic file path
    with open(file_path, "w", encoding='utf-8') as json_file:
        json.dump(image_data, json_file, ensure_ascii=False, indent=4)

    print(f"Images successfully written to {file_path}")
    return cleaned_deck_name

# The main entry point for running from the command line
if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Usage: python script.py <url>")
    else:
        url = sys.argv[1]
        process_deck_url(url)
