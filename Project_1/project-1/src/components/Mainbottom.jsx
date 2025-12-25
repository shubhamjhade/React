import React from 'react'

const Mainbottom = (details) => {
  return (
    <div className='text-white flex flex-col justify-center items-center h-38 w-65 bg-gray-400 rounded-2xl p-6 mb-4 ml-2'><h1 className='pb-2 font-extrabold uppercase'>{details.heading}</h1> <p className='p-2'>{details.description}</p></div>
  )
}

export default Mainbottom