# MTG Project (Currently In Progress)
## Background
I have acquired a crippling addiction to collecting Magic the gathering cards, particulary precons for the format Commander(EDH). 
I want to get my friends into it and as a way to make it competitive, I wanted to make a tournament that relies on only using the preconstructed decks
I have inorder to battle it out in a sort of weekly clash where placements determine your results. After a set amount of weeks, The final top 4 will play it a
final game to determine who gets the prize, which at this point is still up in the air. This project is essentially a way for me to further my addicition in combination with working on my 
frontend development skills so that I can convince my friends to play :laughing:

## mtgdeck_data 
### Uses customtkinter,selenium and BeautifulSoup
During the initial development phase, I made a few decisions and design choices:
1. I would host the website using github pages, since it was free
2. This would mean I had to make a solely static website so I could not use a database server
3. Instead, I would make a sort of "pseudo database" consisting of jsons that the frontend would use instead.
4. Additionally, to reduce the project size, images for the decks and cards would be displayed externally by saving the links from moxfield.com

Because of this plan, while I was creating the pages to display the decks and their cards, I decided to make a webscraper that would get the decks information from its moxfield link. The scraper would simple
get the image and the card names and save it into a json object. The source code for this is in getsdata.py. As I was creating the decks page, I also realised that I needed to create fields for the types of cards and information about the deck that I may want to display. Instead of having to go through every json and categorize everything, I then improved on the scraper in getsdata_reformed. This would simply categorize the cards in order. There is an issue however where it was simply impossible to scrape for the category "Backup" commander as there was none on the moxfield page. Additionally, when I was adding more and more to the website, I also need a way to add a deck to a list, add/edit information on the deck and add a match to the json database. To make it easier, I created a GUI using customtkinter that would make it easy to achieve this. While the code is in dire need to refactoring and fixing up for readability, it functions perfectly. Currently it has the option to:
1. Create a new deck json from moxfield link and append the deck to the decklist.json
2. Display Current Backup commanders and the ability to add new ones
3. Add/Edit Deck information
4. Add/Edit Deck extra notes
5. Add/Remove Deck Keywords (Currently glossary.json is simply placeholder)
6. Create a match and add it to matches.json as well as updates leaderboard.json

## mtgwebproj
### React + Vite Javascript Tailwind css project
While still in development and yet to be uploaded, this is the source code for a website that would display information my friends might need in order to partake in my MTG tournament. 
