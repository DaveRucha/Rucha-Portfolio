import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaMobileAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'PackFoodReady2Go',
    url: 'https://github.com/DaveRucha/PackFoodReady2Go', // Replace with actual project link
    description: [
      { text: 'Constructed a web application aimed at 250+ food packaging providers, offering over 70 different packaging solutions.', icon: FaCode },
      { text: 'Built features like product categorization, wishlist, and real-time admin panel, improving efficiency by 30%.', icon: FaDatabase },
      { text: 'Utilized .NET, MVC, Repository Pattern, integrated Stripe for secure payments, handling 100+ transactions per week.', icon: FaDatabase },
      { text: 'Created a responsive frontend with JavaScript, HTML, CSS, and Bootstrap, optimizing experience across devices.', icon: FaMobileAlt }
    ]
  },
  {
    title: 'Digital Vehicle Maintenance',
    url: 'https://github.com/DaveRucha/dvm', // Replace with actual project link
    description: [
      { text: 'Executed an Android application for real-time vehicle servicing and bookings.', icon: FaMobileAlt },
      { text: 'Enhanced navigation and booking ease by 25% with responsive design using Android, HTML, and CSS.', icon: FaCode },
      { text: 'Leveraged PHP for server-side processing and Firebase for real-time data management, supporting 50+ transactions.', icon: FaDatabase }
    ]
  },
  {
    title: 'Laptop Shop Management System',
    url: 'https://github.com/DaveRucha/LaptopShop', // Replace with actual project link
    description: [
      { text: 'Prepared a web application to manage inventory for over 100 laptops, improving data handling efficiency.', icon: FaCode },
      { text: 'Applied Java, JSP, Servlets, Bootstrap, and MySQL for CRUD operations, achieving improvements in data management.', icon: FaDatabase },
      { text: 'Designed an intuitive system that reduced manual entry errors by 20% and improved administrative control.', icon: FaCode }
    ]
  }
];

const Projects = () => {
  return (
    <div className="bg-charcoal flex flex-col items-center py-10 h-auto">
      <h1 className="heading-3d text-center mb-25" data-text="My Projects">My Projects</h1>
      <div className="container mx-auto flex flex-col items-center mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-6 rounded-lg shadow-xl transform transition-all hover:shadow-2xl"
              style={{ backgroundColor: '#A7BEAE', color: '#B85042', display: 'block' }}
            >
              <h3 className="text-3xl font-semibold text-black mb-4" style={{ color: '#B85042' }}>
                {project.title}
              </h3>
              <ul className="space-y-3">
                {project.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start space-x-3"
                    style={{ color: '#E7E8D1' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <item.icon className="text-lg" style={{ color: '#B85042' }} />
                    <span className="leading-relaxed text-lg">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>

        {/* "More" Button to GitHub */}
        <a
          href="https://github.com/DaveRucha?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-12 py-3 bg-orange-500 text-black font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
          style={{ backgroundColor: '#A7BEAE', color: '#B85042' }}
        >
          More
        </a>
      </div>
    </div>
  );
};

export default Projects;
