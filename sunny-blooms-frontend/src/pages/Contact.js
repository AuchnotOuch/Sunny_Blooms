import React, { useState } from 'react';
import './Contact.css'; // Importing CSS for styling

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log('Message sent', result);
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div className="contact-background">
            <div className="overlay">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        value={formData.name}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        onChange={handleChange}
                        value={formData.message}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
