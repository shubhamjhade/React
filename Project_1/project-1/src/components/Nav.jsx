import React from 'react'

const Nav = () => {
  let nav = ["Consult Us","Spirits Catch up Plans","book Mob"]
  return (
    <div className='pt-4 px-6 flex gap-79'>
      <h1 className='text-white uppercase font-bold'>
      Spirits and Such Consultation Office
      </h1>
 
   <ul className='flex gap-8'>
        {nav.map((elem, index) => (
          <li key={index} className='text-white capitalize bg-gray-600 px-1 rounded font-normal'>
            {elem}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav