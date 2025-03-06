import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    
  return (
    <section className="mt-[30px]">
        <h1 className="flex justify-center">
            <span className=" border-l-2 border-t-2 border-purple-900 px-2 lg:px-5 py-3 rounded-2xl hover:border-slate-900 text-4xl">
                Contact Me
            </span>
        </h1>
       <div className=" flex flex-col md:flex-row items-center justify-center p-10 gap-10"> 
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-6 rounded-lg shadow-lg">
      
        <form action="https://formspree.io/f/xoqogjgy" method="POST" className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <textarea 
            placeholder="Your Message" 
            className="p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <div>
            <button 
            type="submit" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90"
            >
            Send Message
            </button>
          </div>
        </form>
      </div>
      
      {/* Contact Info & Social Links */}
      <div className="w-full md:w-1/3  p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-2 flex items-center gap-2">
          <FaPhone /> +2348062506385
        </p>
        <p className="text-lg mb-6 flex items-center gap-2">
          <FaEnvelope /> nwachukwureg05@gmail.com
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/onclereg" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="hover:text-gray-700" />
          </a>
          <a href="https://www.linkedin.com/in/reginald-nwachukwu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-blue-700" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
