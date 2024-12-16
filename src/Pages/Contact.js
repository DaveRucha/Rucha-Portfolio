import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
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
    <div className="flex flex-col md:flex-row items-center bg-charcoal py-6">
      {/* Left Side: Form */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <h2 className="heading-3d text-center mb-6" data-text="Contact Me" style={{ fontSize: '3rem' }}>
          Contact Me
        </h2>

        {submitted ? (
          <div className="text-center">
            <h2 className="heading-3d" data-text="Thank You" style={{ fontSize: '2rem' }}>
              Thank you for your message!
            </h2>
            <p className="text-white">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xdknvvej"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white p-7 rounded-lg shadow-lg w-full max-w-lg"
          >
            <div className="mb-6">
              <label className="block text-charcoal text-lg font-bold mb-3" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:border-orange"
              />
            </div>

            <div className="mb-6">
              <label className="block text-charcoal text-lg font-bold mb-3" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:border-orange"
              />
            </div>

            <div className="mb-2">
              <label className="block text-charcoal text-lg font-bold mb-3" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring focus:border-orange"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-orange text-charcoal font-bold rounded-lg hover:bg-orange-dark hover:text-white transition-colors duration-300 text-lg"
                style={{ backgroundColor: '#A7BEAE', color: '#B85042' }}
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right Side: SVG and Social Links */}
      <div className="md:w-1/2 w-full flex flex-col items-center mt-10 md:mt-0">
        <img
          src={`${process.env.PUBLIC_URL}/Contact.svg`}
          alt="Contact Illustration"
          style={{ width: '450px', height: 'auto' }}
          className="rounded-lg shadow-lg"
        />

        {/* Social Links Below the GIF */}
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://github.com/DaveRucha?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange transition duration-300 text-5xl"
            style={{ color: '#B85042' }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rucha-dave-386ab927a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange transition duration-300 text-5xl"
            style={{ color: '#B85042' }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://rucha-portfolio-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange transition duration-300 text-5xl"
            style={{ color: '#B85042' }}
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
