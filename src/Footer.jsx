import React from 'react';

const Footer = () => (
    <footer>
        <div className="footer-container">
            <div className="footer-section about">
                <h3>About Us</h3>
                <p>We are a leading online store offering a wide range of products at affordable prices.</p>
            </div>
            <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>
            <div className="footer-section contact">
                <h3>Contact Us</h3>
                <ul>
                    <li>Email: support@store.com</li>
                    <li>Phone: +20 20 20 20</li>
                    <li>Address: 22 Khan Younis, Palestine</li>
                </ul>
            </div>
            <div className="footer-section social">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://github.com/mota6em/" target="_blank"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/mota6em/" target="_blank"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.facebook.com/mota6em/" target="_blank"><i className='bx bxl-facebook-circle'></i></a>
                    <a href="https://t.me/mota6em" target="_blank"><i className='bx bxl-telegram'></i></a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Motta. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;
