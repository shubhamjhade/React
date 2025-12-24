import React from 'react'

const Nav = () => {
  const liStyle = "bg-gray-400 border-2 px-2 rounded"
  return (
  <div className='navbar h-16- bg-green-500 border-yellow-400 rounded-2xl flex gap-7 list-none justify-end p-2 pr-8 '>
 <ul className="h-12 bg-green-500 border-yellow-400 rounded-2xl flex gap-7 justify-end p-2 pr-8">
      <li className={liStyle}>Designer</li>
      <li className={liStyle}>Collab</li>
      <li className={liStyle}>Blog</li>
      <li className={liStyle}>Contact Us</li>
    </ul>
  </div>
  )
}

export default Nav
