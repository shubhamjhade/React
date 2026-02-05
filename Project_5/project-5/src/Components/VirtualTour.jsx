import React from 'react';

const VirtualTour = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        

        <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl group cursor-pointer">
          
   
          <img 
            src="/assets/video.jpg" 
            alt="Mahindra Blossom Virtual Tour" 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
   
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

  
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-red-600">
              
 
              <div className="absolute -inset-2 -z-10 animate-ping rounded-full bg-white opacity-40"></div>
              
       
              <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

  
          <div className="absolute bottom-8 left-0 w-full text-center">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide drop-shadow-md md:text-3xl">
              Take The Virtual Tour
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VirtualTour;