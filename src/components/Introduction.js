import React from 'react';

const Introduction = () => {
  const Abouts = [
    {
      title: 'About Me',
      description:
        'I am a Master’s student in Computer Science at San Diego State University, specializing in Full Stack and Software Development. I am eager to apply my skills in creating impactful web and mobile applications. My expertise spans Java, ReactJS, .NET, Android, JavaScript, and SQL, enabling me to build efficient, scalable solutions across both frontend and backend. In my previous roles as a Web Developer at Mokshit Infotech and a React.JS Intern at Tatvasoft, I contributed to diverse projects, including sports management and dynamic bookstore applications, focusing on enhancing user experience. I am skilled in REST APIs, MVC, and the Repository Pattern, with experience using tools like Postman, Jira, GitHub, and Power BI for smooth project execution.',
    },
  ];

  return (
    <div className="py-20 bg-charcoal">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Heading and Description */}
        <div className="md:w-1/2 w-full">
          <h2 className="heading-3d text-center md:text-center" data-text="About Me">
            About Me
          </h2>
          <div className="mt-10 flex flex-col space-y-8">
            {Abouts.map((Abt, index) => (
              <div
                key={index}
                className="shadow-lg rounded-lg p-6"
                style={{ backgroundColor: '#A7BEAE' }}
              >
                <p className="mt-4 text-charcoal font-bold text-lg" style={{ color: '#B85042' }}>
                I am a Master’s student in Computer Science at San Diego State University, specializing in Full Stack and Software Development. I am eager to apply my skills in creating impactful web and mobile applications. My expertise spans Java, ReactJS, .NET, Android, JavaScript, and SQL, enabling me to build efficient, scalable solutions across both frontend and backend. 
                </p>
                <br/>
                <p className="mt-4 text-charcoal font-bold text-lg" style={{ color: '#B85042' }}>
                In my previous roles as a Web Developer at Mokshit Infotech and a React.JS Intern at Tatvasoft, I contributed to diverse projects, including sports management and dynamic bookstore applications, focusing on enhancing user experience. I am skilled in REST APIs, MVC, and the Repository Pattern, with experience using tools like Postman, Jira, GitHub, and Power BI for smooth project execution.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: GIF */}
        <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
          <img
            src={`${process.env.PUBLIC_URL}/worker.gif`} // Update with the path to your actual GIF
            alt="Animated GIF"
            style={{ width: '280px', height: 'auto' }} // Inline style for exact size
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
