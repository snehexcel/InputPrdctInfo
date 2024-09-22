# InputPrdctInfo
The HTML file sets up the structure of the web page, including input fields for product name, price, and rating, buttons for adding products and sorting, and containers for the price and rating graphs.
The CSS file styles the web page, creating a visually appealing layout for the input fields, buttons, and graphs. It also defines the styles for the price and rating bars in the graphs.
The JavaScript file handles the functionality of the web page:
It selects the necessary DOM elements using their IDs and classes.
It maintains an array called products to store the entered product data.
The addProduct function retrieves the input values, creates a product object, and adds it to the products array. It then calls the updateGraphs function to display the updated data.
The sortByPrice and sortByRating functions sort the products array based on price or rating, respectively, and call updateGraphs to display the sorted data.
The updateGraphs function clears the existing graphs, creates new price and rating bars based on the products array, and appends them to the corresponding graph containers. It also sets the width of the bars based on the number of products and adds labels to each bar.
The clearInputs function clears the input fields after a product is added.
Event listeners are added to the "Add Product", "Sort by Price", and "Sort by Rating" buttons to trigger the corresponding functions when clicked.
The solution uses only HTML, CSS, and JavaScript, without any external libraries. It demonstrates the use of DOM manipulation, higher-order functions (such as forEach and sort), CSS styling, event handling, and dynamic data updating.
