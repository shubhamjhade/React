import React from 'react';

const Navbar = () => {
  return (

    <nav className="absolute top-0 left-0 z-50 w-full p-6">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between">
  
        <div className="flex items-center">
          <img 
            src="/assets/logo.png" 
            alt="Mahindra Lifespaces" 
            className="h-8 md:h-10" 
          />
        </div>

        <div>

          <a 
            href="tel:+919901717339"
            className="hidden md:flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z" clipRule="evenodd" />
            </svg>
            <span>+91 99017 17339</span>
          </a>


          <button className="flex md:hidden items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Book a Visit</span>
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;