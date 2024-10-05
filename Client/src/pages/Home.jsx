 import React, { useState, useEffect } from 'react';

const RealEstateHomePage = () => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(9);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch random images from Unsplash
  const fetchRandomImages = async () => {
    try {
      const response = await fetch('https://api.unsplash.com/search/photos?client_id=pZppJ-LkiyweQ7M_VKG1gcpC02bvS16qsTEBjbCEpTk&query=real-estate&per_page=10');
      const data = await response.json();

      const fetchedProperties = data.results.map((item) => ({
        id: item.id,
        name: item.alt_description || 'Property',
        location: 'Location Placeholder',
        price: `₹${(Math.random() * 100).toFixed(2)} Cr`, // Random price for demonstration
        img: item.urls.small,
      }));

      const allProperties = [];
      for (let i = 0; i < 5; i++) {
        allProperties.push(...fetchedProperties);
      }

      setProperties(allProperties);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const handleShowMore = () => {
    setVisibleProperties((prev) => prev + 9); // Increment by 9
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleProperties(9); // Reset visible properties when searching
  };

  // Filter properties based on search term
  const filteredProperties = properties.filter(property => 
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate random user data for testimonials
  const generateTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < 10; i++) {
      testimonials.push({
        id: i + 1,
        name: `User ${i + 1}`,
        feedback: `SatyamEstate made my home buying experience seamless! I am thrilled with my new home and highly recommend them!`,
        img: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`, // Random images from the Random User API
      });
    }
    return testimonials;
  };

  const testimonials = generateTestimonials();

  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}

      {/* Introduction Section */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-4xl font-semibold">Welcome to Your Dream Home</h2>
        <p className="mt-2">Discover Prime Land and Property Opportunities</p>
        <p className="mt-5 max-w-2xl mx-auto">
          At [Your Real Estate Company Name], we believe that finding the perfect place to call home starts with exceptional land and property options. Whether you're looking for a sprawling parcel of land to build your dream estate or an exquisite property in a lively neighborhood, we are committed to helping you find your ideal space.
        </p>
        <h3 className="text-2xl mt-5">#1 in Delhi NCR</h3>
        <h3 className="text-2xl mt-3">Exceptional Success Rate</h3>
        <p className="mt-2">With a promising track record, we have successfully closed numerous deals for satisfied clients across various properties and lands.</p>
      </section>

      {/* Search Section */}
      <section className="p-10 bg-gray-100 text-center">
        <input 
          type="text" 
          placeholder="Search Properties..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="p-3 rounded border border-gray-300"
        />
      </section>

      {/* Properties Section */}
      <section id="properties" className="p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-5">Available Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProperties.slice(0, visibleProperties).map((property) => (
            <div key={property.id} className="bg-white p-5 rounded shadow-lg border border-gray-200">
              <img src={property.img} alt={property.name} className="rounded mb-3" />
              <h4 className="text-xl font-semibold">{property.name}</h4>
              <p>Location: {property.location}</p>
              <p>Price: {property.price}</p>
              <button className="bg-slate-700 text-white p-2 rounded mt-2">View Details</button>
            </div>
          ))}
        </div>
        {visibleProperties < filteredProperties.length && (
          <div className="text-center mt-5">
            <button 
              onClick={handleShowMore} 
              className="bg-blue-600 text-white p-3 rounded"
            >
              See More
            </button>
          </div>
        )}
      </section>


      {/* Why Choose Us Section */}
     

      {/* Testimonials Section */}
       <section className="p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-5">What Our Clients Say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map(testimonial => (
            <div key={testimonial.id} className="bg-white p-5 rounded shadow-lg border border-gray-200 flex flex-col items-center">
              <img src={testimonial.img} alt={testimonial.name} className="rounded-full mb-3 w-24 h-24" />
              <p className="text-center text-[#407be2] mb-2">"{testimonial.feedback}"</p>
              <cite className="text-[#2C3E50] font-semibold">{testimonial.name}</cite>
            </div>
          ))}
        </div>
      </section> 
      
 

   
      {/* Contact Us Section */}
      <section id="contact" className="p-10 bg-slate-700 flex flex-col lg:flex-row mt-15">
        {/* Left Part: Address and Customer Care */}
        <div className="flex-1 text-white mb-5 lg:mr-10 ml-10 ">
          <h3 className="text-3xl font-semibold mb-5">Get in Touch!</h3>
          <h4 className="font-semibold">Address:</h4>
          <p>
            Floor no-2, Tapasya Corp Heights,<br />
            Subarea, Sector 126,<br />
            Noida, Uttar Pradesh 201303
          </p>
          <h4 className="font-semibold mt-5">Customer Care:</h4>
          <p>📞 +91-9xxxxxxxx<br />
          📧 info@satyamestate.com</p>
        </div>

        {/* Middle Part: Useful Links */}
        <div className="flex-1 mb-5 mt-15">
          <h4 className="text-white font-semibold mb-3">Useful Links:</h4>
          <ul className="text-white space-y-2">
            <li><a href="/top-properties" className="text-blue-400 hover:underline">Top Properties</a></li>
            <li><a href="/about-us" className="text-blue-400 hover:underline">About Us</a></li>
            <li><a href="/services" className="text-blue-400 hover:underline">Our Services</a></li>
            <li><a href="/contact" className="text-blue-400 hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Part: Contact Form */}
        <div className="flex-1 ">
          <form className="flex flex-col max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Name" className="p-3 rounded border bg-slate-300 border-gray-300" />
            <input type="email" placeholder="Email" className="p-3 rounded border bg-slate-300 border-gray-300" />
            <input type="tel" placeholder="Phone Number" className="p-3 rounded border bg-slate-300 border-gray-300" />
            <textarea placeholder="Your Message" className="p-3 rounded border bg-slate-300 border-gray-300 h-24" />
            <button className="bg-sky-700 text-white p-3 rounded">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-5 bg-slate-700 text-center text-white mb-4">
        <p>&copy; 2024 Your Real Estate Company Name. All rights reserved.</p>
      </footer>
      </div>
    
  );
};

export default RealEstateHomePage;

