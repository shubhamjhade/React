import React from 'react'

const Main = () => {
  return (
    <div className='p-6'>
     
      <div className='relative h-[400px] w-full overflow-hidden rounded-3xl'>
        
       
        <img 
          className='absolute  w-full h-full object-cover brightness-[0.6]' 
          src="https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/10/Reigen-Arataka.jpg?q=50&fit=crop&w=1232&h=693&dpr=1.5" 
          alt="Reigen Arataka" 
        />


        <div className='absolute inset-0 flex flex-col justify-end p-10'>
          <h2 className='text-white text-5xl font-black uppercase italic tracking-tighter'>
            Arataka Reigen
          </h2>
          <p className='text-yellow-400 text-xl font-medium mt-2'>
            The Greatest Psychic of the 21st Century
          </p>
          <button className='mt-5 w-fit bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-all'>
            Consult Now - ¥1000
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Main