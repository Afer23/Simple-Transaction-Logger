# Simple Transaction Logger

## Overview

This project is a **Simple Transaction Logger** built using HTML, CSS, and JavaScript. The application allows users to log transactions by entering the sender, receiver, and amount of the transaction. Each transaction is displayed in a list, and users have the option to delete transactions as needed. The transactions are stored in the browser's `localStorage`, so they persist even when the page is refreshed.

## Features

- **User-Friendly Form:** A straightforward form for inputting transaction details such as the sender, receiver, and amount.
- **Transaction History:** Displays a list of all recorded transactions, showing the sender, receiver, and the amount transferred.
- **Persistent Storage:** Utilizes `localStorage` to save transactions, ensuring that the data remains even after the page is reloaded.
- **Delete Functionality:** Users can remove transactions from the list, which also updates the data stored in `localStorage`.

## Project Structure

- `index.html`: The main HTML file that structures the content of the webpage.
- `styles.css`: Contains the styling for the application, giving it a modern and colorful look.
- `script.js`: The JavaScript file that handles the logic for adding, displaying, and deleting transactions, as well as interacting with `localStorage`.

## How to Use

1. **Clone the Repository:**
   
   git clone https://github.com/Afer23/simple-transaction-logger.git
   cd simple-transaction-logger

2. **Open index.html:**

   Open the index.html file in your web browser to view and interact with the application.

3. **Add Transactions:**

   Fill out the form with the sender, receiver, and amount.
   Click "Add Transaction" to log the transaction.
   The transaction will appear in the "Transaction History" list below.

4. **Delete Transactions:**

   Click the "Delete" button next to any transaction to remove it from the list and localStorage


 ## Customization

  **Styling:** The styles.css file can be easily modified to change the appearance of the application. Adjust colors, fonts, and layout as needed.
**Additional Features:** You can extend this project by adding more features, such as editing transactions, filtering transactions by sender/receiver, or exporting the transaction history.
