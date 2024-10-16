import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md'; // Import email and phone icons

const Contact = ({ logoUrl }) => {
  return (
    <div className="relative bg-slate-100">
      {/* Full-screen Background Image Section */}
      <section
        className="h-80 flex items-center justify-center relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative p-6 sm:p-8 text-white text-center">
          <h2 className="text-6xl sm:text-6xl md:text-8xl font-semibold">For Any Information</h2>
          <p className="mt-2 sm:mt-4 text-lg sm:text-xl">Contact Us</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-4">
        {/* Address and Map Section */}
        <section className="flex flex-col md:flex-row justify-between mb-6 mt-4 gap-4">
          <div className="md:w-1/2 mb-4 md:mb-0 bg-white">
            <h2 className="text-xl font-semibold text-center">Map:</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2260021269212!2d77.30258417375065!3d28.592996085878134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f13f630773%3A0x93e9cbf1d2f53217!2sDelhi%20NCR!5e0!3m2!1sen!2sin!4v1729061615211!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <div className="md:w-1/2 bg-white flex gap-10 items-center">
            <div className="ml-8">
              {logoUrl && <img src={logoUrl} alt="Company Logo" className="w-40" />}
            </div>
            <div>
              <h2 className="text-xl font-semibold">Office Address</h2>
              <p>Floor No-2, Tower B,</p>
              <p>Tapasya Corp Heights, Subarea,</p>
              <p>Sector 126, Noida,</p>
              <p>Uttar Pradesh - 201303</p>
              <p>Phone: +91-7007648643</p>
            </div>
          </div>
        </section>

        {/* Company Website and Email in one row */}
        <div className="flex justify-between mb-6 gap-4 h-40">
          <section className="bg-white w-1/2 flex flex-col justify-center items-center text-center p-4 h-40 rounded shadow">
            <h2 className="text-xl font-semibold">Our Company Website:</h2>
            <a href="https://www.example.com" className="text-blue-600 hover:underline">
              www.landmarkreality.com
            </a>
          </section>

          <section className="bg-white w-1/2 flex flex-col justify-center items-center text-center p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Email:</h2>
            <div className="flex items-center justify-center">
              <MdEmail size={24} className="mr-2" />
              <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
                info@example.com
              </a>
            </div>
          </section>
        </div>

        {/* Mobile No and Social Media in one row */}
        <div className="flex justify-between gap-4 h-40">
          <section className="bg-white w-1/2 flex flex-col justify-center items-center text-center p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Mobile No:</h2>
            <div className="flex items-center justify-center">
              <MdPhone size={24} className="mr-2" />
              <p>+91-7007648643</p>
            </div>
          </section>

          <section className="bg-white w-1/2 flex flex-col justify-center items-center text-center p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Social Media:</h2>
            <div className="flex gap-4 mt-2 justify-center">
              <a href="https://www.instagram.com" className="text-blue-600 hover:underline">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com" className="text-blue-600 hover:underline">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-blue-600 hover:underline">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.youtube.com" className="text-blue-600 hover:underline">
                <FaYoutube size={24} />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
