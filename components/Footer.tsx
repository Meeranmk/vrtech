
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/newlogo.jpeg" alt="VR Technology Logo" className="h-8 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-blue-500">VR Technology</span>
                <span className="text-xs text-slate-400 tracking-wide mt-0.5">Industrial Supply & Field Services</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your partner in sustainable thermal excellence. Providing "Single-Window" solutions for cooling technologies and industrial field services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Core Focus</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Dry Cooling Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heat Exchanger Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Field Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Turnaround Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Industry Solutions</a></li>
              <li><a href="#lifecycle" className="hover:text-white transition-colors">Asset Lifecycle</a></li>
              <li><a href="#allied" className="hover:text-white transition-colors">Allied Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">Registered Address:</p>
                  <p>D.No.5/205, Newtown,<br />
                    Podanur, Coimbatore - 641023,<br />
                    Tamil Nadu, India.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919952934312" className="hover:text-white block">+91 9952934312</a>
                  <a href="tel:+919500062047" className="hover:text-white block">+91 9500062047</a>
                  <a href="tel:+919840626724" className="hover:text-white block">+91 9840626724</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:sales@vrtechnology.in" className="hover:text-white block">sales@vrtechnology.in</a>
                  <a href="mailto:info@vrtechnology.in" className="hover:text-white block">info@vrtechnology.in</a>
                  <a href="mailto:quality@vrtechnology.in" className="hover:text-white block">quality@vrtechnology.in</a>
                </div>
              </li>
              <li className="text-xs text-slate-500 pt-2">
                <span className="font-semibold">GST NO:</span> 33CFJPS3737Q1ZO
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500 space-y-4 md:space-y-0">
          <p>© 2024 VR Technology & Industrial Services. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Safety Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
