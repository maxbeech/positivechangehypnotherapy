'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Navigation structure with dropdown menus
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      children: [
        { name: 'About Keira', href: '/about' },
        { name: 'Solution Focused Hypnotherapy', href: '/about/solution-focused-hypnotherapy' },
        { name: 'Qualifications', href: '/about/qualifications' },
      ],
    },
    {
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Anxiety & Depression', href: '/services/anxiety-depression' },
        { name: 'Stress Management', href: '/services/stress-management' },
        { name: 'Confidence & Self-Esteem', href: '/services/confidence-self-esteem' },
        { name: 'Phobias & Fears', href: '/services/phobias-fears' },
        { name: 'Habits & Addictions', href: '/services/habits-addictions' },
        { name: 'Sleep Issues', href: '/services/sleep-issues' },
        { name: 'All Services', href: '/services' },
      ],
    },
    {
      name: 'Programs',
      href: '/programs',
      children: [
        { name: '1-to-1 Positive Change Program', href: '/programs/one-to-one' },
        { name: 'Group Sessions', href: '/programs/group-sessions' },
        { name: 'Online Sessions', href: '/programs/online' },
        { name: 'Corporate Wellness', href: '/programs/corporate' },
      ],
    },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/media/logo-icon_only.png"
                alt="Positive Change Hypnotherapy Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="ml-3 flex flex-col">
                <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-indigo-700' : pathname === '/' ? 'text-white' : 'text-gray-800'
                }`}>
                  Positive Change
                </span>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-indigo-500' : pathname === '/' ? 'text-indigo-100' : 'text-gray-600'
                }`}>
                  Solution Focused Hypnotherapy
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              !item.children ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                    pathname === item.href
                      ? isScrolled
                        ? 'text-indigo-700 bg-indigo-50'
                        : pathname === '/' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-800 bg-white/10 backdrop-blur-sm'
                      : isScrolled
                        ? 'text-gray-700 hover:text-indigo-700'
                        : pathname === '/' ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <Popover key={item.name} className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-md outline-none transition-all duration-300 hover:scale-105 ${
                          pathname?.startsWith(item.href)
                            ? isScrolled
                              ? 'text-indigo-700 bg-indigo-50'
                              : pathname === '/' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-800 bg-white/10 backdrop-blur-sm'
                            : isScrolled
                              ? 'text-gray-700 hover:text-indigo-700'
                              : pathname === '/' ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-white/10'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          } ${
                            isScrolled ? 'text-indigo-700' : pathname === '/' ? 'text-white' : 'text-gray-800'
                          }`}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 mt-2 w-56 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-1 bg-white p-2">
                              {item.children.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              )
            ))}
            <Link
              href="https://positivechangehypnotherapy.co.uk/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:text-indigo-600'
                  : pathname === '/' ? 'text-white hover:text-indigo-200' : 'text-gray-800 hover:text-indigo-600'
              }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === item.href
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="space-y-1">
                      <div
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          pathname?.startsWith(item.href)
                            ? 'bg-indigo-50 text-indigo-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1 border-l-2 border-indigo-100 ml-3">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-2 rounded-md text-sm font-medium ${
                              pathname === subItem.href
                                ? 'bg-indigo-50 text-indigo-700'
                                : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
              <div className="pt-4 pb-3">
                <Link
                  href="https://positivechangehypnotherapy.co.uk/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 