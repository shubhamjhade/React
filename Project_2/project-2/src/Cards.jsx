import React from 'react'

const Cards = (details) => {
  
  return (
    <div className='h-60 w-55 bg-white rounded-2xl p-2 '>
       <img src={details.imgurl} alt="" className='h-15 rounded-4xl ml-2 pt-2'/>
       <div className='flex'>
 <h1 className='font-bold p-2'>{details.name}</h1>
 <p className='font-light text-[10px] pt-3.5 '>{details.postingdate}</p>
       </div>
      <h1 className='font-bold p-1 pt-0'>{details.role}</h1>
      <p className='text-xs pl-2 font-normal bg-gray-200 rounded-[6px] w-15 p-1'>
      {details.type}</p>
       <hr className='mt-8'/>
       <div className='flex'>
        <h1 className='text-sm pt-2  font-bold pr-10'>{details.salary}</h1>
        <button type="button" className='text-xs mt-1 p-1.5 rounded-xl  text-white bg-black'>APPLY NOW</button>
       </div>
    </div>
  )
}

export default Cards