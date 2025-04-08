import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Pattern overlay for visual interest */}
      <div className="absolute inset-0 opacity-5 bg-repeat z-0">
        <Image 
          src="/media/pattern.svg" 
          alt="Background pattern" 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/media/logo-icon_only.png"
            alt="Positive Change Hypnotherapy Logo"
            width={70}
            height={70}
            className="w-auto h-16 mb-4"
          />
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">Positive Change Hypnotherapy</h2>
          <p className="text-gray-400 text-center max-w-2xl">
            Transforming lives through Solution Focused Hypnotherapy. Helping you overcome anxiety, 
            stress, depression, and more with clinically-proven behavioral change therapy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Services</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Blog</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/anxiety-depression" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Anxiety & Depression</Link></li>
              <li><Link href="/services/stress-management" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Stress Management</Link></li>
              <li><Link href="/services/confidence-self-esteem" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Confidence & Self-Esteem</Link></li>
              <li><Link href="/services/phobias-fears" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Phobias & Fears</Link></li>
              <li><Link href="/services/habits-addictions" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Habits & Addictions</Link></li>
              <li><Link href="/services/sleep-issues" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Sleep Issues</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/programs/one-to-one" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">1-to-1 Positive Change Program</Link></li>
              <li><Link href="/programs/group-sessions" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Group Sessions</Link></li>
              <li><Link href="/programs/online" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Online Sessions</Link></li>
              <li><Link href="/programs/corporate" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Corporate Wellness</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center">
                <FaPhoneAlt className="h-4 w-4 mr-2 text-indigo-400" />
                <span>07305 229101</span>
              </li>
              <li className="text-gray-400 flex items-center">
                <FaEnvelope className="h-4 w-4 mr-2 text-indigo-400" />
                <span>pcsfhypnotherapy@gmail.com</span>
              </li>
              <li className="flex space-x-4 mt-6">
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110" 
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110" 
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://wa.me/447305229101" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110" 
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </li>
              <li className="mt-6">
                <Link 
                  href="https://positivechangehypnotherapy.co.uk/booking" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-md"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Positive Change Hypnotherapy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors duration-300">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-indigo-400 transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 