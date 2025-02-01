import React, { useState } from 'react';
import Header from './header';
import emailjs from 'emailjs-com';
import Footer from './footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send form
    emailjs.send(
      'service_sm7d0ha', // Your service ID from EmailJS
      'template_g9v78sf', // Your template ID from EmailJS
      formData,
      'LYThF6H441PvP52pj' // Your User ID from EmailJS
    )
    .then((response) => {
      console.log('Success!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.error('Failed...', err);
      alert('Failed to send the message. Please try again later.');
    });
  };

  return (
    <>
    <Header selected="contact" />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;