const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productRatingInput = document.getElementById('product-rating');
const addProductButton = document.getElementById('add-product');
const sortByPriceButton = document.getElementById('sort-by-price');
const sortByRatingButton = document.getElementById('sort-by-rating');
const priceGraphContainer = document.querySelector('.price-graph');
const ratingGraphContainer = document.querySelector('.rating-graph');

let products = [];

function addProduct() {
    const productName = productNameInput.value.trim();
    const productPrice = parseFloat(productPriceInput.value);
    const productRating = parseFloat(productRatingInput.value);
    
    if (productName && !isNaN(productPrice) && !isNaN(productRating) && productRating >= 1 && productRating <= 5) {
        const product = { name: productName, price: productPrice, rating: productRating };
        products.push(product);
        updateGraphs();
        clearInputs();
    }
}

function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

function sortByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}

function updateGraphs() {
    priceGraphContainer.innerHTML = '';
    ratingGraphContainer.innerHTML = '';
    
    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.classList.add('price-bar');
        priceBar.style.height = `${product.price * 10}px`;
        priceBar.textContent = product.price;
        priceGraphContainer.appendChild(priceBar);
        
        const ratingBar = document.createElement('div');
        ratingBar.classList.add('rating-bar');
        ratingBar.style.height = `${product.rating * 50}px`;
        ratingBar.textContent = product.rating;
        ratingGraphContainer.appendChild(ratingBar);
    });
    
    const priceBars = document.querySelectorAll('.price-bar');
    const ratingBars = document.querySelectorAll('.rating-bar');
    
    priceBars.forEach((bar, index) => {
        bar.style.width = `${100 / priceBars.length}%`;
        const priceBarLabel = document.createElement('div');
        priceBarLabel.classList.add('price-bar-label');
        priceBarLabel.textContent = products[index].name;
        bar.appendChild(priceBarLabel);
    });
    
    ratingBars.forEach((bar, index) => {
        bar.style.width = `${100 / ratingBars.length}%`;
        const ratingBarLabel = document.createElement('div');
        ratingBarLabel.classList.add('rating-bar-label');
        ratingBarLabel.textContent = products[index].name;
        bar.appendChild(ratingBarLabel);
    });
}

function clearInputs() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productRatingInput.value = '';
}

addProductButton.addEventListener('click', addProduct);
sortByPriceButton.addEventListener('click', sortByPrice);
sortByRatingButton.addEventListener('click', sortByRating);