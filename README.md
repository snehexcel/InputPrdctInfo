# InputPrdctInfo
# Product Management Web Page

## Overview
This project is a simple web application that allows users to add products, sort them by price or rating, and visualize the data through graphs.

## File Structure
- HTML File: Sets up the structure of the web page.
- CSS File: Styles the web page for a visually appealing layout.
- JavaScript File: Handles the functionality of the web application.

## Features
1. Input Fields:
   - Product Name
   - Price
   - Rating

2. Buttons:
   - Add Product
   - Sort by Price
   - Sort by Rating

3. Graphs:
   - Displays price and rating bars dynamically based on the entered products.

## Functionality
- DOM Manipulation:
  - Selects necessary elements using IDs and classes.
  
- Data Management:
  - Maintains an array `products` to store entered product data.

- Core Functions:
  - `addProduct`: Retrieves input values, creates a product object, adds it to the products array, and updates graphs.
  - `sortByPrice`: Sorts the products array based on price and updates the graphs.
  - `sortByRating`: Sorts the products array based on rating and updates the graphs.
  - `updateGraphs`: Clears existing graphs, creates new bars, and appends them to the graph containers. Sets widths and adds labels for each bar.
  - `clearInputs`: Clears input fields after a product is added.

- Event Listeners:
  - Attached to "Add Product", "Sort by Price", and "Sort by Rating" buttons to trigger corresponding functions.

## Technologies Used
- HTML
- CSS
- JavaScript

## Highlights
- Utilizes DOM manipulation and event handling.
- Implements higher-order functions such as `forEach` and `sort`.
- Demonstrates dynamic data updating without external libraries.

Feel free to contribute or modify this project!
