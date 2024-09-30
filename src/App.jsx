import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import FilterSection from './filterSection';
import Footer from './Footer';
import productsData from './products'; 

function App() {
  const [gender, setGender] = useState('All');
  const [price, setPrice] = useState('All');
  const [color, setColor] = useState('All');
    const [products, setProducts] = useState(productsData); 
    const [filteredProducts, setFilteredProducts] = useState(productsData); 
    const matchPriceRange = (price, priceRange) => {
        if (priceRange === "under50") return price < 50;
        if (priceRange === "from50to100") return price >= 50 && price <= 100;
        if (priceRange === "over100") return price > 100;
        return false;
    };

    const applyProductFilters = (filters) => {
        const { selectedGender, selectedColor, selectedPrice } = filters;

        const newFilteredProducts = products.filter(product => {
            return (
                (selectedGender.length === 0 || selectedGender === product.category) &&
                (selectedColor.length === 0 || selectedColor === product.colors) &&
                (selectedPrice.length === 0 || matchPriceRange(product.price, selectedPrice))
            );
        });

        setFilteredProducts(newFilteredProducts); 
    };

    return (
        <div className="App">
            <Header />
            <FilterSection applyFilters={applyProductFilters} /> <Footer />
        </div>
    );
}

export default App;
