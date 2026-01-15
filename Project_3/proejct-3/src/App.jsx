import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import './App.css';

const App = () => {

  const [num, setNum] = useState(0);
  const [jokeData, setJokeData] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJokeData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [num]); 

  return (
    <div className='box'>
     
        <div className="joke-display">
          <h2>{jokeData.setup}</h2>
          <br />
          <p>{jokeData.punchline}</p>
        </div>
      
      
      <button className='btn' onClick={() => setNum(num + 1)}>
        Tell me a joke
      </button>
    </div>
  );
}

export default App;