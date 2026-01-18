import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Replace with your actual WhatsApp number (include country code without + or spaces)
    // Example: For +91 9876543210, use: 919876543210
    const phoneNumber = '919952934312'; // VR Technology WhatsApp number
    const message = 'Hello! I would like to inquire about your services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Chat on WhatsApp"
        >
            {/* Main Button */}
            <div className="relative">
                <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7" />
                </div>

                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

                {/* Tooltip */}
                <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}`}>
                    Chat with us on WhatsApp
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-slate-900"></div>
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
