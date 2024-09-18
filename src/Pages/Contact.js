import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true); // Update state to show success message
          form.reset();
        } else {
          alert('There was an error submitting the form');
        }
      })
      .catch((error) => {
        alert('There was an error submitting the form');
      });
  }

  return (
    <div className="h-screen flex items-center justify-center bg-purple-100">
      {submitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Thank you for your message!</h2>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form
          action="https://formspree.io/f/xdknvvej" // Replace with your Formspree endpoint
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contact;
