const filterBarItems = document.querySelectorAll(".filter-bar");
const filterSections = Array.from(filterBarItems).slice(1);

const filterCheckboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
const showAllItemsButton  = document.getElementById("all-items");
const filterBackgroundOverlay = document.querySelector(".bar-options-background");
let openFilterCount = 0;
filterSections.forEach((item) => {
    item.addEventListener('click', function() {
        const filterDetails = this.nextElementSibling;
        const toggleIcon = item.querySelector(".toggleIcon");
        if (filterDetails.style.display === "flex") {
            openFilterCount -=1;
            filterDetails.style.height = "0rem";
            filterDetails.style.display = "none";
            if(openFilterCount === 0){
                filterBackgroundOverlay.style.height = "0";
                filterBackgroundOverlay.style.display = "none";
            }
            toggleIcon.style.transform = "rotate(0deg)";
            toggleIcon.style.transform = "0.5s";
        } else {
            filterDetails.style.display = "flex";
            filterDetails.style.height = "9rem";
            openFilterCount +=1;
            filterBackgroundOverlay.style.height = "9rem";
            filterBackgroundOverlay.style.display = "flex";
            toggleIcon.style.transform = "rotate(180deg)";
            toggleIcon.style.transform = "0.5s";
        }
    });
}
);


const products = [
    { name: "Nike Air Max", category: "Men", price: 120, img: "images/shoe.jpg", colors: ["Black", "White"] , sale : false},
    { name: "Adidas Ultra Boost", category: "Men", price: 180, img: "images/shoe.jpg", colors: ["Black", "Blue"] , sale : true},
    { name: "Puma Running Shoes", category: "Men", price: 90, img: "images/shoe.jpg", colors: ["Red", "White"] , sale : false},
    { name: "Reebok Crossfit", category: "Men", price: 130, img: "images/shoe.jpg", colors: ["Black"] , sale : false},
    { name: "Under Armour Curry", category: "Men", price: 150, img: "images/shoe.jpg", colors: ["White", "Blue"] , sale : false},
    { name: "New Balance 990v5", category: "Men", price: 175, img: "images/shoe.jpg", colors: ["White"] , sale : true},
    { name: "Vans Old Skool", category: "Men", price: 65, img: "images/shoe.jpg", colors: ["Black", "White"] , sale : true},
    { name: "Converse All Star", category: "Unisex", price: 55, img: "images/shoe.jpg", colors: ["Black", "Red"],sale : false},
    { name: "Air Jordan 1", category: "Unisex", price: 200, img: "images/shoe.jpg", colors: ["Red", "Black", "White"], sale : true },
    { name: "Dr. Martens 1460", category: "Unisex", price: 150, img: "images/shoe.jpg", colors: ["Black", "White"] , sale : false},
    { name: "Nike Blazer Mid '77", category: "Unisex", price: 100, img: "images/shoe.jpg", colors: ["White"] , sale : true},
    { name: "Nike Air Force 1", category: "Women", price: 44, img: "images/shoe.jpg", colors: ["White"] , sale : false},
    { name: "Adidas Stan Smith", category: "Unisex", price: 85, img: "images/shoe.jpg", colors: ["White", "Black"], sale : false },
    { name: "Birkenstock Arizona", category: "Unisex", price: 110, img: "images/shoe.jpg", colors: ["White", "Black"] , sale : false},
    { name: "Ugg Classic Mini", category: "Women", price: 140, img: "images/shoe.jpg", colors: ["White"] , sale : false},
    { name: "Gucci Ace Sneakers", category: "Women", price: 650, img: "images/shoe.jpg", colors: ["White", "Red", "Black"], sale : false },
    { name: "Nike Air Force 1", category: "Women", price: 100, img: "images/shoe.jpg", colors: ["White"] , sale : false},
    { name: "Adidas Superstar", category: "Women", price: 85, img: "images/shoe.jpg", colors: ["White", "Black"] , sale : false},
    { name: "Puma Cali Sneakers", category: "Women", price: 75, img: "images/shoe.jpg", colors: ["White", "Red"] , sale : true},
    { name: "Steve Madden Travel", category: "Women", price: 90, img: "images/shoe.jpg", colors: ["Black", "White"] , sale : false},
    { name: "Balenciaga Speed", category: "Women", price: 800, img: "images/shoe.jpg", colors: ["Black"] , sale : false},
    { name: "ASICS Gel-Kayano", category: "Women", price: 160, img: "images/shoe.jpg", colors: ["Blue", "White"] , sale : false},
    { name: "Nike Air Force 1", category: "Women", price: 49, img: "images/shoe.jpg", colors: ["White"] , sale : false},
    { name: "Saucony Jazz", category: "Women", price: 75, img: "images/shoe.jpg", colors: ["White", "Red"] , sale : false},
    { name: "Vans Sk8-Hi", category: "Unisex", price: 70, img: "images/shoe.jpg", colors: ["Black", "White"] , sale : true},
    { name: "Fila Disruptor II", category: "Unisex", price: 75, img: "images/shoe.jpg", colors: ["White"] , sale : false},
    { name: "Timberland Premium 6", category: "Unisex", price: 198, img: "images/shoe.jpg", colors: ["White", "Black"] , sale : false}
];



const productsArea = document.getElementById("product-display");
function displayProducts(productsToShow){
    productsToShow.forEach((item) =>{
        const productCard = document.createElement('div');
        const productName = document.createElement('h4');
        const productCategory = document.createElement('p');
        const productPrice = document.createElement('p');
        const productColors = document.createElement('p');
        const productImg = document.createElement('img');
        productImg.src = `${item.img}`;
        productImg.classList.add("productImg");
        productCard.classList.add("productCard");
        productCard.append(productImg);
        productName.innerHTML = `<h4>Model name: <span class="productName">${item.name}</span></h4>` 
        productCard.append(productName);
        productCategory.innerHTML = `<p>Category: <span class="productCategory">${item.category}</span><p>`
        productCard.append(productCategory);
        productColors.innerHTML = `<p>Avilable Colors: <span class="productColor">${item.colors.map(color => color).join(', ')}</span></p>`
        productCard.append(productColors);
        if(item.sale === true){
            productPrice.innerHTML = `<p>Price: <span class="productPrice sale">$${item.price} SALE!</span></p>`            
        }else{
            productPrice.innerHTML = `<p>Price: <span class="productPrice">$${item.price}</span></p>`
        }
        productCard.append(productPrice);
        productsArea.append(productCard);
    })        
}
displayProducts(products);

function matchPriceRange(price , pricRange){
    if(pricRange === "over $150"){
        return price > 150;
    }
    if(pricRange === "$100 - $150"){
        return price >= 100 && price <= 150;
    }
    if(pricRange === "$50 - $100"){
        return price >= 50 && price <= 100;
    }
    else{
        return price < 50;
    }
}
function applyProductFilters (){
    const selectedGenders = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value);
    const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(checkbox => checkbox.value);
    const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(checkbox => checkbox.value);
    const selectedSales = Array.from(document.querySelectorAll('input[name="sale"]:checked')).map(checkbox => checkbox.value);
    let filteredProducts = products.filter(product => {
        console.log(selectedColors.some(color => product.colors.includes(color)));
        return (selectedGenders.length===0 || selectedGenders.includes(product.category)) && (selectedSales.length === 0 || product.sale === true) && (selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color))) &&
        (selectedPrices.length === 0 || selectedPrices.some(priceRange => matchPriceRange( product.price, priceRange)));
    })
    productsArea.innerHTML = '';
    displayProducts(filteredProducts);
}
function resetFiltersAndCloseUI(){
    openFilterCount = 0;
    filterBackgroundOverlay.style.height = "0";
    filterBackgroundOverlay.style.display = "none";
    filterCheckboxes.forEach(checkbox => checkbox.checked = false);
    filterSections.forEach((item) => {
        const filterDetails = item.nextElementSibling;
        const toggleIcon = item.querySelector(".toggleIcon");
        filterDetails.style.height = "0rem";
        filterDetails.style.display = "none";    
        toggleIcon.style.transform = "rotate(0deg)";
    })
}
showAllItemsButton .addEventListener('click', () => {displayProducts(products), resetFiltersAndCloseUI()});

document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
    checkbox.addEventListener('change', applyProductFilters );
});


const toTopBtn = document.getElementById("to-up-btn");
let lastScrollPosition = 0;
window.addEventListener('scroll', function() {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > 200) {
        toTopBtn.style.display = "flex";
    }
    if (currentScrollPosition < lastScrollPosition) {
        toTopBtn.style.display = "none";
    }
    lastScrollPosition = currentScrollPosition;
});

toTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});