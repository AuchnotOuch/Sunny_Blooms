import React from 'react';
import './About.css'; // Importing CSS for styling

const About = () => {
    return (
        <div className="about-background">
            <div className="about-overlay">
                <div className="about-container">
                    <div className="main-about-section">
                        <h1>About Sunny Blooms</h1>
                        <p>
                            Sunny Blooms has been a cornerstone of the community for over a decade. Founded with a passion for bringing the beauty of nature into the everyday lives of our customers, we pride ourselves on offering the freshest flowers and the most creative arrangements. Whether it’s a grand event or a small gesture of love, we are dedicated to helping you express your emotions through the timeless language of flowers.
                        </p>
                        <p>
                            Our mission is to provide not only beautiful flowers but also an exceptional experience from the moment you walk through our doors. With a wide variety of flowers sourced from local growers and sustainable practices, we ensure that every bouquet tells a story of care, passion, and dedication.
                        </p>
                    </div>
                    <div className="owners-section">
                        <div className="owner-section">
                            <img src="/images/female.jpg" alt="Sarah Bloom" className="owner-portrait" />
                            <div className="owner-info">
                                <h2>Sarah Bloom</h2>
                                <p>Sarah has always had a deep connection with nature. Growing up surrounded by the vibrant colors and fragrances of her grandmother’s garden, she developed a passion for flowers early on. Sarah believes that every bouquet is a piece of art, and she loves crafting arrangements that bring joy and warmth to her customers.</p>
                            </div>
                        </div>
                        <div className="owner-section">
                            <img src="/images/male.jpg" alt="Michael Green" className="owner-portrait" />
                            <div className="owner-info">
                                <h2>Michael Green</h2>
                                <p>Michael’s love for flowers began during his travels around the world, where he experienced the beauty of diverse floral landscapes. His goal is to share that global inspiration with the community, bringing unique and exotic blooms to Sunny Blooms. Michael enjoys working directly with customers to create custom arrangements that reflect their personal stories.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
