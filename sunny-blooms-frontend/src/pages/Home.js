import React from 'react';
import './Home.css'; // Importing CSS for styling

const Home = () => {
    return (
        <div className="home-background">
            <div className="home-overlay">
                <div className='logo'>
                    <img src='/images/sunnybloomlogo.png'></img>
                </div>
                <h1>Welcome to Sunny Blooms</h1>
                <p>
                    At Sunny Blooms, we pride ourselves on offering the freshest flowers and the best arrangements in town.
                    Whether you’re celebrating a special occasion or simply want to brighten someone’s day, we have the perfect bouquet for you.
                </p>
                <p>
                    Visit our shop today to see our full selection of flowers, plants, and gifts. We’re committed to providing our customers with quality products and exceptional service.
                </p>
            </div>
        </div>
    );
};

export default Home;
