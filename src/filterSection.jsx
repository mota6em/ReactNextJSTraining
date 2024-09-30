import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './products';
const FilterComponent = () => {
    const [gender, setGender] = useState('All');
    const [price, setPrice] = useState('All');
    const [color, setColor] = useState('All');
    const items = products;
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        const filtered = items.filter(item => {
            const matchesGender = gender === 'All' || item.gender === gender;
    
            const matchesPrice = 
                price === 'All' ||
                (price === 'under50' && item.price < 50) ||
                (price === 'from50to100' && item.price >= 50 && item.price <= 100) ||
                (price === 'over100' && item.price > 100);
    
            const matchesColor = color === 'All' || item.color === color;
                return matchesGender && matchesPrice && matchesColor;
        });
        console.log(filtered);
        setFilteredItems(filtered);
    }, [gender, price, color]);
    
    return (
        <div>
            <section className='filter-section'>
                <button className="chile btn btn-primary" onClick={() => {
                    setGender('All');
                    setPrice('All');
                    setColor('All');
                }}>
                    All
                </button>

                <div className="filter-gender child">
                    <label className="filter-bar">Gender:</label>
                    <select 
                        className="form-select" 
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                </div>

                <div className="filter-price child">
                    <label className="filter-bar">Price:</label>
                    <select 
                        className="form-select" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="under50">Under $50</option>
                        <option value="from50to100">$50 - $100</option>
                        <option value="over100">Over $100</option>
                    </select>
                </div>

                <div className="filter-color child">
                    <label className="filter-bar">Color:</label>
                    <select 
                        className="form-select" 
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Colored">Colored</option>
                    </select>
                </div>
            </section>
            <section id="product-display" className="product-display">
    {filteredItems.length === 0 ? (
        <p className="no-items-message">Sorry, no products found.</p>
    ) : (
        filteredItems.map((product, index) => (
            <div key={product.name + index} className="productCard">
                <img src={product.img} alt={product.name} className="productImg" />
                <h4>Model name: <span className="productName">{product.name}</span></h4>
                <p>Category: <span className="productCategory">{product.gender}</span></p>
                <p>Available Color: <span className="productColor">{product.color}</span></p>
                <p>Price: <span className={`productPrice`}>
                    ${product.price}
                </span></p>
            </div>
        ))
    )}
</section>


        </div>
    );
};

export default FilterComponent;