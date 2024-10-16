import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer=()=> {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs
      .sendForm('service_bc3xhm5', 'template_kzm46d5', form.current, 'u9y21q-z7wvzBjQ2L')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };

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
      <h4 className="font-semibold mt-5">Contact us :</h4>
      <p>📞 +91-7007648643<br />
      📧 info@estate.com</p>
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
      {/* <form ref={form} onSubmit={sendEmail}className="flex flex-col max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="p-3 rounded border bg-slate-300 border-gray-300" />
        <input type="email" placeholder="Email" className="p-3 rounded border bg-slate-300 border-gray-300" />
        <input type="tel" placeholder="Phone Number" className="p-3 rounded border bg-slate-300 border-gray-300" />
        <textarea placeholder="Your Message" className="p-3 rounded border bg-slate-300 border-gray-300 h-24" />
        <button className="bg-sky-700 text-white p-3 rounded">Submit</button>
      </form> */}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-md mx-auto space-y-4">
            <input type="text" name="from_name" placeholder="Name" className="p-3 rounded border bg-slate-300 border-gray-300" required />
            <input type="email" name="from_email" placeholder="Email" className="p-3 rounded border bg-slate-300 border-gray-300" required />
            {/* <input type="tel" name="user_phone" placeholder="Phone Number" className="p-3 rounded border bg-slate-300 border-gray-300" required /> */}
            <textarea name="message" placeholder="Your Message" className="p-3 rounded border bg-slate-300 border-gray-300 h-24" required />
            <button type="submit" className="bg-sky-700 text-white p-3 rounded">Submit</button>
          </form>
    </div>
  </section>
  {/* Footer */}
  <footer className="p-5 bg-slate-700 text-center text-white mb-4 ">
    <p>&copy; 2024 LandMarks Reality. All rights reserved.</p>
  </footer>
  </div>
  )
}

export default Footer