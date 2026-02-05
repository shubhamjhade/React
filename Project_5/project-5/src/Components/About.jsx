import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          
          <div className="w-full md:w-1/2">
            <h4 className="mb-2 text-sm font-bold uppercase tracking-widest text-red-500">
              Premium Apartments in Whitefield
            </h4>
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900 md:text-5xl">
              About <span className="text-red-600">Mahindra Blossom</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Mahindra Blossom is a thoughtfully designed premium residential project in Whitefield, 
                Bengaluru. It blends urban convenience with green living, creating a calm, secure, 
                and future-ready environment.
              </p>
              <p>
                Strategically located near Hope Farm Junction, offering <strong>2, 3 & 4 BHK luxury apartments</strong>.
              </p>
            </div>

            <button className="mt-8 border-b-2 border-red-600 pb-1 text-sm font-bold uppercase text-red-600 transition hover:text-red-800">
              Read More
            </button>
          </div>

      
          <div className="relative w-full md:w-1/2 md:pl-10">
            
  
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/assets/tree.jpg" 
                alt="Garden Path" 
                loading="lazy"
                className="h-[400px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-6 w-1/2 overflow-hidden rounded-xl border-4 border-white shadow-2xl md:-bottom-12 md:-left-12">
              <img 
                src="/assets/chair.jpg" 
                alt="Balcony View" 
                loading="lazy"
                className="h-[180px] w-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;