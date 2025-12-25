import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import Mainbottom from './components/Mainbottom'

const App = () => {
  return (
    <div className='bg-black min-h-screen'> 
    <Nav />
    <Main />
   <div className="flex flex-wrap">
  <Mainbottom
    heading="Record"
    description="9,999+ Malevolent Entities Purified"
  />

  <Mainbottom
    heading="Specialization"
    description="Specializing in Salt Splash techniques and high-level exorcisms"
  />

  <Mainbottom
    heading="Rank"
    description="Voted #1 Psychic Agency for customer satisfaction and price."
  />

  <Mainbottom
    heading="Employees"
    description="Have World's Strongest Psychic as Employee"
  />
</div>

    </div>
  )
}

export default App