import React from 'react';

const Amenities = () => {
  const amenities = [
    { title: "Aromatic Garden", img: "/assets/amenity1.jpg" }, 
    { title: "Spacious Kitchen", img: "/assets/amenity2.jpg" },
    { title: "Party Lawn",       img: "/assets/amenity3.jpg" },
    { title: "Swimming Pool",    img: "/assets/amenity4.jpg" },

    { title: "Multipurpose Court", img: "/assets/amenity1.jpg" },
    { title: "Modern Bedroom",   img: "/assets/amenity2.jpg" },
    { title: "Jogging Track",    img: "/assets/amenity3.jpg" },
    { title: "Kids Play Area",   img: "/assets/amenity4.jpg" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
  
        <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-5xl">
          Amenities <span className="text-gray-500 font-light">for Every Age, Every Mood</span>
        </h2>
        <p className="mt-4 mb-12 text-sm font-bold uppercase tracking-widest text-gray-400">
          Premium Amenities That Transform Your Home Into A Private Retreat
        </p>

   
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-48 overflow-hidden rounded-2xl shadow-lg md:h-64 cursor-pointer"
            >
         
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              
          
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>

   
              <p className="absolute bottom-4 left-4 text-left text-sm font-bold text-white md:text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;