
"use client"

import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = { name, email, message };

        try {
            const response = await fetch('/api/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log(response)

            if (response.ok) {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div id='contact'>
            <hr />
            <div className="bg-gray-800 min-h-screen flex items-center justify-center">
                <form className="bg-white rounded-lg shadow-xl p-8 w-96" onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Write your name here.."
                            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Let us know how to contact you back.."
                            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="What would you like to tell us.."
                            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none resize-none"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="float-right bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300">
                        Send Message
                    </button>
                </form>
            </div>
            <hr />
        </div>
    );
};

export default ContactForm;
