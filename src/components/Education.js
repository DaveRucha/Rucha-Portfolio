import React from 'react';

const Education = () => (
  <section id="education" className="p-10 bg-charcoal text-white">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Left Side: GIF */}
      <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
        <img
          src={`${process.env.PUBLIC_URL}/education.gif`} // Replace with the actual GIF path
          alt="Education GIF"
          style={{ width: '310px', height: 'auto' }} // Inline style for specific width
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Heading and Content */}
      <div className="md:w-1/2 w-full">
        <h2 className="heading-3d text-center md:text-Center mb-10" data-text="Education">
          Education
        </h2>
        <div className="space-y-6">
          {/* San Diego State University */}
          <div
            style={{ backgroundColor: '#A7BEAE', color: '#B85042' }}
            className="shadow-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-bold">San Diego State University</h3>
            <p className="italic text-lg">Master's, Computer Science</p>
            <p className="text-lg text-charcoal italic">August 2024 - May 2026</p>
            <ul className="mt-4 list-disc list-inside space-y-1 text-lg">
              <li>AI and Machine Learning</li>
              <li>Advanced Object-Oriented Programming (AOOP)</li>
              <li>Advanced Database Management Systems (ADBMS)</li>
              <li>Data Science</li>
              <li>Web and Mobile Applications</li>
              <li>Management of Software Development</li>
              <li>Algorithms</li>
            </ul>
          </div>

          {/* L.D College of Engineering */}
          <div
            style={{ backgroundColor: '#A7BEAE', color: '#B85042' }}
            className="shadow-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-bold">L.D College of Engineering, Ahmedabad</h3>
            <p className="italic text-lg">Bachelor's, Computer Engineering</p>
            <p className="text-lg text-charcoal italic">June 2021 - June 2024</p>
            <p className="text-lg text-charcoal font-bold">GPA: 3.91</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
