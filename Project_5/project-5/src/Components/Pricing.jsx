import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "2 BHK",
      size: "1000-1100 sq.ft.",
      price: "₹85 L",
      isSoldOut: true, 
    },
    {
      name: "3 BHK",
      size: "1500-1600 sq.ft.",
      price: "₹1.10 Cr",
      isSoldOut: false,
    },
    {
      name: "4 BHK",
      size: "2200-2350 sq.ft.",
      price: "₹2.20 Cr",
      isSoldOut: false,
    },
  ];

  return (
    <section className="bg-red-600 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
      
        <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
          Unlock the Door to Affordable Luxury
        </h2>
        <p className="mt-4 text-sm font-medium uppercase tracking-widest text-red-100 opacity-80">
          Explore Apartment Options and Pricing Details Tailored to Your Needs
        </p>
        
  
        <div className="my-8 flex justify-center text-red-200">
          <span className="text-2xl">❦</span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-transform hover:-translate-y-2"
            >
              
    
              {plan.isSoldOut && (
                <div className="absolute -right-12 top-6 w-[150px] rotate-45 bg-red-600 py-1 text-center text-xs font-bold text-white shadow-md">
                  SOLD OUT
                </div>
              )}


              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm font-medium text-gray-500">{plan.size}</p>
              
              <div className="my-8 border-t border-b border-gray-100 py-6">
                <p className="text-3xl font-bold text-gray-900">
                  {plan.price}
                  <span className="ml-1 text-sm font-normal text-gray-400">Onwards</span>
                </p>
              </div>

              <button 
                disabled={plan.isSoldOut}
                className={`w-full rounded-full border px-6 py-3 text-sm font-bold uppercase transition
                  ${plan.isSoldOut 
                    ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400' 
                    : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                  }`}
              >
                {plan.isSoldOut ? 'Unavailable' : 'Get Quote'}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;