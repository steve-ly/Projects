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
    deck_name = re.sub(r'\s*\(.*?\)\s*', '', deck_name)
    cleaned_deck_name = deck_name.replace(' ', '-')
    cleaned_deck_name = cleaned_deck_name.lower()

    print(f"Processing deck: {cleaned_deck_name}")

    # Create a dictionary to hold categories and their corresponding images
    category_data = {"DeckName":deck_name}

    # Define the allowed categories
    allowed_categories = {
        "Lands", "Creatures", "Commander", "Planeswalkers", 
        "Enchantments", "Artifacts", "Instants", "Sorceries"
    }
    # Find all divs that contain images
    image_divs = soup.find_all('div', class_='img-card-visual')

    for div in image_divs:
        # Get the category name from the span
        category_span = div.find_previous('span', class_='d-inline-block me-1')
        category_name = category_span.get_text(strip=True) if category_span else 'Uncategorized'

        # Check if the category is allowed
        if category_name in allowed_categories:
            # Find all img tags within this image div
            img_tags = div.find_all('img')
            
            # Create a list to hold the image data for this category
            image_data = []
            for img in img_tags:
                img_src = img['src']
                img_alt = img.get('alt', 'No alt text found')

                # Append the image data as a dictionary
                image_data.append({
                    'Image Source': img_src,
                    'Alt Text': img_alt
                })

            # Add the category and its image data to the main dictionary
            if category_name in category_data:
                category_data[category_name].extend(image_data)  # Append to existing list
            else:
                category_data[category_name] = image_data  # Create new entry

    # Create a dynamic file path using the cleaned deck name
    file_path = rf"C:/Users/Steven/Desktop/mtgdeck_data/{cleaned_deck_name}.json"

    # Write the category data to a JSON file using the dynamic file path
    with open(file_path, "w", encoding='utf-8') as json_file:
        json.dump(category_data, json_file, ensure_ascii=False, indent=4)

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
