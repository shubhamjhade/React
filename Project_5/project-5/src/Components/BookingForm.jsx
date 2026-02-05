import React from 'react';

const BookingForm = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
      
    
      <div className="mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Let Us Show You Around
        </p>
        <h3 className="mt-1 font-serif text-2xl font-bold text-gray-900">
          Book a guided site <span className="text-pink-600">visit</span>
        </h3>
      </div>


      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
        />

        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            className="mt-1 h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500" 
          />
          <p className="text-xs text-gray-500">
            I agree to receive updates via WhatsApp.
          </p>
        </div>

   
        <button className="w-full rounded-lg bg-pink-600 py-3 font-bold text-white transition hover:bg-pink-700">
          Book An Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;