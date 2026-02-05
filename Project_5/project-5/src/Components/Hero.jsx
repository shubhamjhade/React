import React from 'react';
import BookingForm from './BookingForm';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden md:h-[700px]">
      
   
      <div className="absolute inset-0">
        <img 
          src="/assets/building.jpg" 
          alt="Mahindra Blossom" 
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent"></div>
      </div>

     
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row md:px-12 md:py-0">
        
   
        <div className="w-full max-w-xl text-center md:text-left">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
            Home of Positive Energy
          </p>
          <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-7xl">
            Mahindra <span className="text-pink-600">Blossom</span>
          </h1>
          <p className="mb-8 text-lg font-light text-gray-200 md:text-xl">
            2, 3 & 4 BHK Premium Homes at<br className="hidden md:block" /> Hopefarm Junction, Whitefield
          </p>

          <div className="inline-block rounded border border-gray-600 bg-white/10 px-8 py-4 backdrop-blur-md">
            <span className="block text-xs uppercase tracking-wider text-gray-300">Starting From</span>
            <span className="text-3xl font-bold text-white">₹1.88 Cr*</span>
          </div>

     
          <div className="mt-8 space-y-2 text-sm text-gray-300">
             <p>✦ 8 Acres | 6 Towers | 750 Units</p>
             <p>✦ Pay 10% Now + ₹ 10,999/Month</p>
          </div>
        </div>

 
        <div className="w-full max-w-md">
          <BookingForm />
        </div>

      </div>
    </section>
  );
};

export default Hero;