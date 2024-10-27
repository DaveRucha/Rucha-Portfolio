import React from 'react';

const skills = [
  { name: 'React', image: `${process.env.PUBLIC_URL}/React.png` },
  { name: 'Android', image: `${process.env.PUBLIC_URL}/android.png` },
  { name: '.NET', image: `${process.env.PUBLIC_URL}/net.png` },
  { name: 'SQL', image: `${process.env.PUBLIC_URL}/sql.png` },
  { name: 'Java', image: `${process.env.PUBLIC_URL}/java.png` },
  { name: 'HTML', image: `${process.env.PUBLIC_URL}/html.png` },
  { name: 'CSS', image: `${process.env.PUBLIC_URL}/css.png` },
  { name: 'JavaScript', image: `${process.env.PUBLIC_URL}/javascript.png` },
  { name: 'C++', image: `${process.env.PUBLIC_URL}/c++.png` },
  { name: 'Machine Learning', image: `${process.env.PUBLIC_URL}/ML.png` },
];

const Skills = () => {
  return (
    <div className="py-20 bg-charcoal">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange mb-5 heading-3d" data-text="Skills"
         style={{ marginBottom: '60px' }}>
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-lg" style={{ width: '110px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px' }} />
              </div>
              <p className="font-semibold mt-2"
              style={{ color: '#B85042' }}
              >{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
