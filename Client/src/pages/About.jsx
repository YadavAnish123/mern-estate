import React from 'react';

const About = ({logoUrl}) => {
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
    <div className=" bg-gray-100 text-gray-800">
      {/* Introduction Section */}
      <section
        className="h-80 flex items-center justify-center relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/28775231/pexels-photo-28775231/free-photo-of-silhouette-of-mosque-at-sunset-with-dramatic-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative p-6 sm:p-8 text-white text-center">
          <h2 className="text-6xl sm:text-6xl md:text-8xl font-semibold">Our Brief History</h2>
         
        </div>
      </section>
    {/* About company */}
       <section className='sm:flex justify-center'>
            <div className='sm:w-1/2'>
              <img src={logoUrl} alt="logo" srcset="" className='w-screen h-auto'/>
            </div>
            <div className='sm:w-1/2 bg-white gap-4 p-4'>
               <h1 className='text-3xl font-semibold '>Get To Know About Landmarks Reality</h1>
                
               <h1 className='mt-8 underline text-lg'>THE BEST REAL ESTATE CONSULTANT IN DELHI/NCR</h1>
               <p className='mt-2'>With over a decade of experience in the real estate market, Landmarks Reality has established itself as a trusted name in the industry. Our commitment to making the real estate experience seamless and accessible has driven our success.</p>
               <p className='mt-8'>Under the guidance of our dedicated team, we have successfully completed projects that have brought joy to more than 50 happy clients, reflecting our strong track record in customer satisfaction. Our diverse portfolio includes a wide range of residential and commercial properties, from luxurious apartments and villas to thriving commercial spaces.</p>
               <p className='mt-8'>We take pride in our reputation for excellence, having facilitated over 100 successful transactions. Our focus on client relationships and personalized service has made us a preferred choice for investors seeking reliable real estate consulting in Delhi/NCR.</p>
            <p className='mt-8'>Join the growing family of satisfied clients and experience the Landmarks Reality difference!</p>
            </div>
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
