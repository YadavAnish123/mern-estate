import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Lead Agent',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Marketing Director',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    // Add more team members as needed
  ];
  return (
    <div> 
    <div className="p-10 bg-gray-100 text-gray-800">
      {/* Introduction Section */}
      <section className="mb-10">
        <h2 className="text-4xl font-semibold text-center mb-5">About Us</h2>
        <p className="text-center max-w-2xl mx-auto">
          At Satyam Estate, we are dedicated to helping you find your dream property. With years of experience in the real estate market, our expert team is here to guide you through every step of the process.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-3">Our Mission</h3>
        <p>
          Our mission is to provide exceptional real estate services with integrity, professionalism, and a personal touch. We strive to meet and exceed our clients' expectations in every transaction.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold mb-3">Our Values</h3>
        <ul className="list-disc list-inside">
          <li>Integrity: We operate with honesty and transparency.</li>
          <li>Customer-Centric: Our clients are at the heart of everything we do.</li>
          <li>Expertise: Our team is knowledgeable and experienced.</li>
          <li>Innovation: We embrace new technologies to serve our clients better.</li>
        </ul>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h3 className="text-3xl font-semibold mb-3">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white p-5 rounded shadow-lg flex flex-col items-center">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="rounded-full mb-3 w-24 h-24 object-cover" 
              />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
  </div>
  <footer className="p-5 bg-slate-700 text-center text-white">
  <p>&copy; 2024 Your Real Estate Company Name. All rights reserved.</p>
</footer>
</div>
  );
};

// Sample team members data
 

export default About;
