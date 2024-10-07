import React from 'react'

const  Footer=()=> {
  return (
    <div> 
         <section id="contact" className="p-10 bg-slate-700 flex flex-col lg:flex-row mt-15">
        {/* Left Part: Address and Customer Care */}
        <div className="flex-1 text-white mb-16  ml-16  sm:ml-40">
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
        <div className="hidden lg:flex justify-center">
  <div className="flex flex-col items-center mb-5 mt-15 max-w-lg w-full sm:mr-40">
    <h4 className="text-white font-semibold mb-3 text-center">Useful Links:</h4>
    <ul className="text-white space-y-2 text-center">
      <li><a href="/top-properties" className="text-blue-400 hover:underline">Top Properties</a></li>
      <li><a href="/about-us" className="text-blue-400 hover:underline">About Us</a></li>
      <li><a href="/services" className="text-blue-400 hover:underline">Our Services</a></li>
      <li><a href="/contact" className="text-blue-400 hover:underline">Contact Us</a></li>
    </ul>
  </div>
</div>


        {/* Right Part: Contact Form */}
        <div className="flex-1   sm:mr-40">
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
      <footer className="p-5 bg-slate-700 text-center text-white mb-4 ">
        <p>&copy; 2024 Your Real Estate Company Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer