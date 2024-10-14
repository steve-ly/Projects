import customtkinter
import getsdata_reformed
import json
import os

customtkinter.set_appearance_mode("dark")
customtkinter.set_default_color_theme("dark-blue")

root = customtkinter.CTk()
root.geometry("1920x1080")

global players


current_directory = os.getcwd()  # or specify your desired directory path
# List all JSON files in the directory
exclude_files = {"deckList.json", "leaderboard.json", "matches.json","glossary.json"}
options = [f for f in os.listdir(current_directory) if f.endswith('.json') and f not in exclude_files]

# Set default value; you can set it to None or the first JSON file if the list is not empty
selected_option = customtkinter.StringVar(value=options[0] if options else "")

def print_selected_option(*args):
    """Print the selected option."""
    update_json_display()  # Update the JSON display when selection changes

# Trace changes to selected_option
selected_option.trace_add("write", print_selected_option)

def update_dropdown():
    """Update the dropdown options with current JSON files."""
    global options
    options = [f for f in os.listdir(current_directory) if f.endswith('.json') and f[0].isupper()]
    dropdown_menu.configure(values=options)  # Update the dropdown menu values
    selected_option.set(options[0] if options else "")  # Reset to the first option or empty
    update_json_display()  # Update display on dropdown change

def update_json_display():
    global backup_input, backup_button,info_text_box,information_label,info_button,extra_text_box,extra_label,extra_button,difficulty_label,difficulty_option,key_label,checkbox_vars, checkboxes   # Declare these as global to modify them later
    selected_file = selected_option.get()
    
    # Clear any existing dynamic widgets
    if 'backup_input' in globals():
        backup_input.destroy()
    if 'backup_button' in globals():
        backup_button.destroy()
    if 'info_text_box' in globals():
        info_text_box.destroy()
    if 'info_button' in globals():
        info_button.destroy()
    if 'information_label' in globals():
        information_label.destroy()
    if 'extra_text_box' in globals():
        extra_text_box.destroy()
    if 'extra_button' in globals():
        extra_button.destroy()
    if 'extra_label' in globals():
        extra_label.destroy()
    if 'difficulty_label' in globals():
        difficulty_label.destroy()
    if 'difficulty_option' in globals():
        difficulty_option.destroy()
    if 'checkbox' in globals():
        checkbox.destroy()
    if 'key_label' in globals():
        key_label.destroy()
    if 'checkboxes' in globals():
        for checkbox in checkboxes:
            checkbox.destroy()
        checkboxes.clear() 
        
    if selected_file:  # Check if a file is selected
        with open(selected_file, 'r', encoding='utf-8') as json_file:
            data = json.load(json_file)
            if "BackUp" not in data or not data["BackUp"]:
                # Display when there are no backup commanders
                display_text = "No backup Commander(s) has been set yet"                
            else:
                # If backups exist, create a list of their alt texts
                backup_alt_texts = [backup["Alt Text"] for backup in data["BackUp"]]
                display_text = "Current Backup Commander(s):\n" + "\n".join(backup_alt_texts)
    
            backupcommander_label.configure(text=display_text)  # Display BackUp entry option
            
            # Create the input field and button
            backup_input = customtkinter.CTkEntry(master=center_frame, placeholder_text="Enter Backup Commander")
            backup_input.pack(pady=12, padx=10)


            backup_button = customtkinter.CTkButton(master=center_frame, text="Add Backup", command=add_backup_commander)
            backup_button.pack(pady=12, padx=10)
            
             # Create it for the Information field
            information_label = customtkinter.CTkLabel(master=center_frame, text="Deck Information", font=("Roboto", 14), justify="left")
            information_label.pack(pady=12, padx=10)
            if "Information" in data:
                information_text = data["Information"]
            else:
                information_text = ""  # Set to empty if key doesn't exist

            # Create a CTkTextbox for displaying the information
            info_text_box = customtkinter.CTkTextbox(center_frame, wrap='word', height=300, width=800)  # Increased width and height
            info_text_box.insert(customtkinter.END, information_text)  # Insert the text into the box
            info_text_box.pack(pady=10)

            # Create a button for showing the information (no save functionality)
            info_button = customtkinter.CTkButton(master=center_frame, text="Save Information",command=add_information)
            info_button.pack(pady=12, padx=10)
                        
            #Add Extra text
            extra_label = customtkinter.CTkLabel(master=center_frame, text="Extra Text", font=("Roboto", 14), justify="left")
            extra_label.pack(pady=12, padx=10)
            if "Extra" in data:
                extra_text = data["Extra"]
            else:
                extra_text = ""  # Set to empty if key doesn't exist

            # Create a CTkTextbox for displaying the information
            extra_text_box = customtkinter.CTkTextbox(center_frame, wrap='word', height=300, width=800)  # Increased width and height
            extra_text_box.insert(customtkinter.END, extra_text)  # Insert the text into the box
            extra_text_box.pack(pady=10)

            # Create a button for showing the information (no save functionality)
            extra_button = customtkinter.CTkButton(master=center_frame, text="Save Extra", command=add_extra)
            extra_button.pack(pady=12, padx=10)
            
            #Select option for difficulty
            difficulty_label = customtkinter.CTkLabel(master=center_frame, text="Select Difficulty", font=("Roboto", 14), justify="left")
            difficulty_label.pack(pady=12, padx=10)
                        
            difficulty_option =  customtkinter.CTkOptionMenu(master=center_frame,values=["None Set", "Easy", "Medium","Hard"],command=set_difficulty)
            difficulty_option.pack(pady=12, padx=10)
            if 'Difficulty' not in data:
                difficulty_option.set("None Set")
            else:
                difficulty_option.set(data["Difficulty"])
            #Glossary
            key_label = customtkinter.CTkLabel(master=center_frame, text="Select Keywords", font=("Roboto", 14), justify="left")
            key_label.pack(pady=12, padx=10)
            
            with open("glossary.json", 'r', encoding='utf-8') as json_file:
                glossary = json.load(json_file)
            checkbox_vars = []
            checkboxes = []  # Store created checkbox widgets

            for term in glossary:
                default_value = 0
                if "Keywords" in data:
                    if term in data["Keywords"]:
                        default_value = 1
                var = customtkinter.IntVar(value=default_value)
                checkbox_vars.append(var)
                checkbox = customtkinter.CTkCheckBox(master=center_frame, text=term, variable=var,onvalue=1, offvalue=0, command=lambda t=term, v=var: set_keywords(t, v))
                checkbox.pack(anchor="w", pady=5)
                checkboxes.append(checkbox) 
                        
            
def set_keywords(term, var):
    selected_file = selected_option.get()
    with open(selected_file, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)
    if "Keywords" not in data:
        data["Keywords"] = []
    if var.get() == 1 and term not in data["Keywords"]:
        data["Keywords"].append(term)
    elif var.get() == 0 and term in data["Keywords"]:
        data["Keywords"].remove(term)
    with open(selected_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)
    return

def add_backup_commander():
    backup_name = backup_input.get()
    selected_file = selected_option.get()
    
    with open(selected_file, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    # Check for existing Alt Texts
    all_alt_texts = []
    for category, items in data.items():
        if isinstance(items, list):  # Ensure the items are in a list
            for item in items:
                if "Alt Text" in item:  # Check if the "Alt Text" key exists
                    all_alt_texts.append(item["Alt Text"])

    # Check for existing backup entries
    backup_alt_texts = []
    if "BackUp" in data:
        backup_alt_texts = [backup["Alt Text"] for backup in data["BackUp"]]

    if backup_name:
        # Check if the backup name is in the main data
        if backup_name not in all_alt_texts:
            message_label.configure(text=f"{backup_name} not found in deck", text_color="red")
            return
        
        # Check if the backup already exists
        if backup_name in backup_alt_texts:
            message_label.configure(text=f"{backup_name} already a backup", text_color="red")
            return

        # Find the original item to move
        original_item = None
        for category, items in data.items():
            if isinstance(items, list):
                for item in items:
                    if item.get("Alt Text") == backup_name:
                        original_item = item
                        items.remove(item)  # Remove from original category
                        break
            if original_item:
                break
        # Prepare the new backup entry
        new_backup_entry = {
            "Image Source": original_item["Image Source"],
            "Alt Text": original_item["Alt Text"]
        }

        # Add to BackUp key
        if "BackUp" not in data:
            data["BackUp"] = []  # Create BackUp key if it doesn't exist
        data["BackUp"].append(new_backup_entry)

        # Write the updated data back to the JSON file
        with open(selected_file, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, ensure_ascii=False, indent=4)

        message_label.configure(text=f"Backup Commander added: {backup_name}", text_color="green")
        update_json_display()
    else:
        message_label.configure(text="No input detected", text_color="red")



def add_deck_to_list():
    # Retrieve user input from left panel
    input = decklist_entry.get()
    # Display message and clear input fields
    if input:
        left_label.configure(text=f"Deck has been added successfully and the list has been generated", text_color="green")
        deckname = getsdata_reformed.process_deck_url(input)
        try:
            with open(f"{deckname}.json", 'r', encoding='utf-8') as json_file:
                data = json.load(json_file)  # Load the JSON data
                if "Commander" in data:
                    commander = data["Commander"][0]
                    print(commander)
                    with open("deckList.json", 'r', encoding='utf-8') as decklist_file:
                        deckList = json.load(decklist_file)
                        deckList.insert(0, commander)
                    with open("deckList.json", 'w', encoding='utf-8') as decklist_file:
                        json.dump(deckList, decklist_file, indent=4)
                    
                    # Update the dropdown options after adding the deck
                    update_dropdown()  # Call to update the dropdown options
                else:
                    left_label.configure(text=f"Error: Decklist could not be generated", text_color="red")
                    return None
        except FileNotFoundError:
            left_label.configure(text=f"Error: The file {deckname}.json was not found.", text_color="red")
            return None
        except json.JSONDecodeError:
            left_label.configure(text="Error: The file is not a valid JSON file.", text_color="red")
            return None
        except Exception as e:
            left_label.configure(text=f"An error occurred: {e}", text_color="red")
            return None
    else:
        left_label.configure(text="Please add the link to the deck", text_color="red")
    
    decklist_entry.delete(0, 'end')

def add_information():
    information = info_text_box.get("1.0", "end-1c")
    selected_file = selected_option.get()
    with open(selected_file, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    # Add to BackUp key
    if "Information" not in data:
        data["Information"] = []  # Create BackUp key if it doesn't exist
    data["Information"] = information

    # Write the updated data back to the JSON file
    with open(selected_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False,indent=4)
    return


def add_extra():
    extra = extra_text_box.get("1.0", "end-1c")
    selected_file = selected_option.get()
    with open(selected_file, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    # Add to BackUp key
    if "Extra" not in data:
        data["Extra"] = []  # Create BackUp key if it doesn't exist
    data["Extra"] = extra

    # Write the updated data back to the JSON file
    with open(selected_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False,indent=4)
    return

def set_difficulty(difficulty):
    selected_file = selected_option.get()
    with open(selected_file, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    # Add to BackUp key
    if "Difficulty" not in data:
        data["Difficulty"] = []  # Create BackUp key if it doesn't exist
    data["Difficulty"] = difficulty

    # Write the updated data back to the JSON file
    with open(selected_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False,indent=4)
    return



import json
import os

# Add match function
def add_match():
    date = date_entry.get()
    players = []
    
    # Collect player data
    for i in range(5):
        player_name = player_entries[i].get()
        points = number_entries[i].get()
        option = dropdown_right_menus[i].get()
        if player_name:
            try:
                points = int(points)  # Convert points to integer
            except ValueError:
                points = 0  # Handle cases where points are not a valid number
            player = {"Name": player_name, "Points": points, "Deck": option}
            players.append(player)

    # Sort players by points in descending order (1st place to last)
    players.sort(key=lambda x: x["Points"], reverse=True)
    
    # Prepare data for JSON entry
    rankings = [player["Name"] for player in players]
    decks = [player["Deck"] for player in players]
    points = [str(player["Points"]) for player in players]  # Convert points back to string for JSON

    new_match = {
        "Date": date,
        "Rankings": rankings,
        "Decks": decks,
        "Points": points
    }

    # Load existing matches from JSON file
    matches_file = 'matches.json'
    if os.path.exists(matches_file):
        with open(matches_file, 'r') as f:
            matches = json.load(f)
    else:
        matches = []  # Create a new list if the file doesn't exist

    # Append the new match entry
    matches.append(new_match)

    # Write updated matches back to JSON file
    with open(matches_file, 'w') as f:
        json.dump(matches, f, indent=4)

    # Update leaderboard.json
    leaderboard_file = 'leaderboard.json'
    if os.path.exists(leaderboard_file):
        with open(leaderboard_file, 'r') as f:
            leaderboard = json.load(f)
    else:
        leaderboard = []  # Create a new list if the file doesn't exist

    # Create a dictionary to store player points for easy updating
    leaderboard_dict = {entry['name']: int(entry['points']) for entry in leaderboard}

    for player in players:
        name = player['Name']
        points = player['Points']

        if name in leaderboard_dict:
            # Update the points if the player is already in the leaderboard
            leaderboard_dict[name] += points
        else:
            # Add a new player to the leaderboard
            leaderboard_dict[name] = points

    # Prepare the updated leaderboard list
    updated_leaderboard = [{"name": name, "points": str(points)} for name, points in leaderboard_dict.items()]

    # Sort the updated leaderboard by points in descending order
    updated_leaderboard.sort(key=lambda x: int(x["points"]), reverse=True)

    # Write updated leaderboard back to JSON file
    with open(leaderboard_file, 'w') as f:
        json.dump(updated_leaderboard, f, indent=4)

    # Clear input fields
    date_entry.delete(0, 'end')
    for player_entry in player_entries:
        player_entry.delete(0, 'end')  
    
    for number_entry in number_entries:
        number_entry.delete(0, 'end')
    
    for dropdown_menu in dropdown_right_menus:
        dropdown_menu.set("Option 1")
    
    # Display confirmation message
    confirmation_label.configure(text="Match added successfully!", text_color="green")

# Create the main frame
main_frame = customtkinter.CTkScrollableFrame(master=root)
main_frame.pack(pady=20, padx=60, fill="both", expand=True)

# Create three panels (frames) inside the main frame
left_frame = customtkinter.CTkFrame(master=main_frame)
left_frame.pack(side="left", fill="y", padx=(0, 10))

center_frame = customtkinter.CTkFrame(master=main_frame)
center_frame.pack(side="left", fill="both", expand=True, padx=(0, 10))

right_frame = customtkinter.CTkFrame(master=main_frame)
right_frame.pack(side="left", fill="both", expand=True)

# Add Deck to Deck List
add_to_list = customtkinter.CTkLabel(master=left_frame, text="Add Deck to Deck List", font=("Roboto", 18))
add_to_list.pack(pady=12, padx=10)

decklist_entry = customtkinter.CTkEntry(master=left_frame, placeholder_text="Add Moxfield link to deck")
decklist_entry.pack(pady=12, padx=10)

add_to_list_button = customtkinter.CTkButton(master=left_frame, text="Submit Deck", command=add_deck_to_list)
add_to_list_button.pack(pady=12, padx=10)

left_label = customtkinter.CTkLabel(master=left_frame, text="", font=("Roboto", 16))
left_label.pack(pady=12, padx=10)

# Center panel content
label_center = customtkinter.CTkLabel(master=center_frame, text="Edit Deck", font=("Roboto", 24))
label_center.pack(pady=12, padx=10)

# Create the dropdown menu
dropdown_menu = customtkinter.CTkOptionMenu(master=center_frame, variable=selected_option, values=options)
dropdown_menu.pack(pady=12, padx=10)

# Label to display the first JSON item
backupcommander_label = customtkinter.CTkLabel(master=center_frame, text="", font=("Roboto", 14), justify="left")
backupcommander_label.pack(pady=12, padx=10)

message_label = customtkinter.CTkLabel(master=center_frame, text="", font=("Roboto", 14), justify="left")
message_label.pack(pady=12, padx=10)

# Right panel content
label_right = customtkinter.CTkLabel(master=right_frame, text="Create Match", font=("Roboto", 18))
label_right.pack(pady=12, padx=10)

date_label = customtkinter.CTkLabel(master=right_frame, text="Date", font=("Roboto", 18))
date_label.pack(pady=12, padx=10)

date_entry = customtkinter.CTkEntry(master=right_frame, placeholder_text="dd/mm/yyyy")
date_entry.pack(pady=12, padx=10)

player_label = customtkinter.CTkLabel(master=right_frame, text="Add Player", font=("Roboto", 18))
player_label.pack(pady=12, padx=10)

player_entries = []  # List to store player entry widgets
number_entries = []  # List to store number entry widgets
dropdown_right_menus = []  # List to store dropdown menu widgets

# Dropdown menu options

for i in range(1, 6):  # Loop to create 5 rows of widgets
    # Create a frame to hold the entries and dropdown in the same row
    row_frame = customtkinter.CTkFrame(master=right_frame)
    row_frame.pack(pady=12, padx=10, fill="x")  # Pack the frame

    # Player entry field
    player_entry = customtkinter.CTkEntry(master=row_frame, placeholder_text=f"Player {i}")
    player_entry.pack(side="left", padx=10)  # Pack to the left side within the row frame
    player_entries.append(player_entry)  # Store player entry in the list
    
    # Number entry field (smaller)
    number_entry = customtkinter.CTkEntry(master=row_frame, placeholder_text="Points", width=50)  # Adjust width for a smaller field
    number_entry.pack(side="left", padx=10)  # Pack next to player entry
    number_entries.append(number_entry)  # Store number entry in the list
    
    # Dropdown menu
    dropdown_right_menu = customtkinter.CTkOptionMenu(master=row_frame, values=options)
    dropdown_right_menu.pack(side="left", padx=10)  # Pack next to number entry
    dropdown_right_menus.append(dropdown_right_menu)  # Store dropdown menu in the list


# Button to add match
right_button = customtkinter.CTkButton(master=right_frame, text="Add Match", command=add_match)
right_button.pack(pady=12, padx=10)

# Confirmation label (initially empty)
confirmation_label = customtkinter.CTkLabel(master=right_frame, text="")
confirmation_label.pack(pady=12, padx=10)

root.mainloop()
