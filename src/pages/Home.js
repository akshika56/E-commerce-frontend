import React from 'react';
import '../styles/main.css'; 
import Product from '../components/Product'; // Product component

const Home = () => {
    return (
        <div className="home-container">
            <main>
                <h1 className="title">Welcome to Govind Toys!</h1>
                <p className="description">Your one-stop shop for the best kids' toys.</p>
                
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <div className="product-list">
                        {/* Example of how to render products, replace with actual product data */}
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;


