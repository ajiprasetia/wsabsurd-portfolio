import React from 'react';
import { FaYoutube, FaTiktok } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';


const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's collaborate and create something amazing together
        </p>

        {/* Contact Info*/}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400 text-center">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300 bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">wsabsurb.exe@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+62 851 8320 3779</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Pekanbaru, Riau, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Follow Me
              </h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.instagram.com/wsabsurd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors hover:scale-110"
                >
                  <Instagram className="text-purple-400" size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UC2RMoy3VF9Smy_9Rh9uaonA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/40 transition-colors hover:scale-110"
                >
                  <FaYoutube className="text-pink-400" size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@wsabsurd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors hover:scale-110"
                >
                  <FaTiktok className="text-purple-400" size={20} />
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~01bd9fd65641501aae?mp_source=share" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/40 transition-colors hover:scale-110"
                >
                  <SiUpwork className="text-pink-400" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;