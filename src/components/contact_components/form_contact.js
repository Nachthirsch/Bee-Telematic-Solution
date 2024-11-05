// ContactForm.jsx
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "Bee Telematic Solution",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-gradient-to-r from-amber-50 to-amber-500 min-h-screen py-8 font-poppins">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Contact Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden md:flex max-w-4xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="bg-amber-600/90 backdrop-blur-sm text-white p-8 md:w-2/5">
            <h2 className="text-2xl font-bold mb-4">We Are Here to Assist</h2>
            <p className="mb-6 text-amber-50">Butuh bantuan? Tim kami siap membantu Anda! Hubungi kami untuk solusi terbaik.</p>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a href="tel:08151614175" className="flex items-center space-x-3 hover:text-amber-200 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>08151614175</span>
              </a>

              <a href="mailto:beesolusindo@gmail.com" className="flex items-center space-x-3 hover:text-amber-200 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>beesolusindo@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 md:w-3/5">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input type="text" value={formData.company} disabled className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" name="phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows="3" onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
