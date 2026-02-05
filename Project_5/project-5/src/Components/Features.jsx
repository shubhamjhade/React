import React from 'react';

const Features = () => {
  const featuresList = [
    {
      title: "Prime and Well Connected Location",
      desc: "Located at Hope Farm Junction, Whitefield. Minutes away from ITPL and Metro station."
    },
    {
      title: "Homes Designed for Space, Light & Comfort",
      desc: "Choose from 2, 3 & 4 BHK premium apartments with excellent ventilation and Vaastu compliance."
    },
    {
      title: "Wake Up to Green, Calm Living",
      desc: "Surrounded by landscaped open spaces and greenery. Enjoy the fresh air every morning."
    },
    {
      title: "Resort-Style Amenities at Your Doorstep",
      desc: "Offering 50,000 sq. ft. of world-class amenities including a clubhouse, pool, and gym."
    },
    {
      title: "Sustainable Living",
      desc: "IGBC Gold Pre-certified Green Homes with waste management and energy efficiency."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        
   
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          

          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/assets/chair.jpg" 
                alt="Mahindra Features" 
                loading="lazy" 
                className="h-[500px] w-full object-cover md:h-[700px]"
              />

              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-pink-100 bg-pink-50"></div>
            </div>
          </div>


          <div className="w-full md:w-1/2">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gray-400">
              Why Buy a Home at Mahindra Blossom
            </p>
            <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Features & <span className="text-red-600">Highlights</span>
            </h2>

   
            <div className="space-y-6">
              {featuresList.map((item, index) => (
                <div key={index} className="flex gap-4">
                  
   
                  <div className="mt-1 flex-shrink-0">
                    <div className="h-3 w-3 rotate-45 bg-red-600 shadow-sm"></div>
                  </div>

   
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;