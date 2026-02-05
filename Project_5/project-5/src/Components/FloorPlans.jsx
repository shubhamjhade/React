import React, { useState } from 'react';

const FloorPlans = () => {

  const [activeTab, setActiveTab] = useState('master');


  const plans = {
    master: {
      img: "/assets/flat-1.png",
      title: "Master Plan",
      desc: "A sprawling 8-acre landscape designed for community living."
    },
    bhk2: {
      img: "/assets/flat-2.jpg",
      title: "2 BHK Luxury",
      desc: "Perfect for young families. 1100 sq.ft of smart space."
    },
    bhk3: {
      img: "/assets/flat-3.jpg",
      title: "3 BHK Premium",
      desc: "Spacious living for larger families. 1600 sq.ft."
    }
  };

  return (
    <section className="bg-red-600 py-16 md:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
        <h2 className="font-serif text-3xl font-bold md:text-5xl">
          Thoughtfully Designed Floor Plans
        </h2>
        <p className="mt-4 mb-10 text-sm font-medium uppercase tracking-widest text-red-100 opacity-80">
          Smart Layouts That Maximize Space, Light, And Everyday Comfort
        </p>

      
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setActiveTab('master')}
            className={`rounded-full px-8 py-3 text-sm font-bold uppercase transition-all
              ${activeTab === 'master' ? 'bg-white text-red-600 shadow-lg' : 'border border-red-400 text-red-100 hover:bg-red-700'}`}
          >
            Master Plan
          </button>
          <button 
            onClick={() => setActiveTab('bhk2')}
            className={`rounded-full px-8 py-3 text-sm font-bold uppercase transition-all
              ${activeTab === 'bhk2' ? 'bg-white text-red-600 shadow-lg' : 'border border-red-400 text-red-100 hover:bg-red-700'}`}
          >
            2 BHK
          </button>
          <button 
            onClick={() => setActiveTab('bhk3')}
            className={`rounded-full px-8 py-3 text-sm font-bold uppercase transition-all
              ${activeTab === 'bhk3' ? 'bg-white text-red-600 shadow-lg' : 'border border-red-400 text-red-100 hover:bg-red-700'}`}
          >
            3 BHK
          </button>
        </div>

   
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white p-4 shadow-2xl md:p-8">
          
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
     
            <img 
              src={plans[activeTab].img} 
              alt={plans[activeTab].title}
              className="h-full w-full object-contain" 
            />
            
          
            <div className="absolute bottom-4 left-4 rounded bg-black/70 px-4 py-2 text-white backdrop-blur-sm">
              <h4 className="font-bold">{plans[activeTab].title}</h4>
            </div>
          </div>

          <p className="mt-6 text-lg font-medium text-gray-800">
            {plans[activeTab].desc}
          </p>
          
          <button className="mt-6 rounded bg-gray-900 px-8 py-3 text-sm font-bold uppercase text-white transition hover:bg-black">
            Download PDF
          </button>

        </div>

      </div>
    </section>
  );
};

export default FloorPlans;