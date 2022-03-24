import React, { useState } from 'react';
import Clock from './components/clock/Clock';


const App = () => {

  const [degree, setDegree] = useState(0);


  return (
    <div>
      <form>
        <input type='number' 
               value={degree} 
               onChange={(e)=> setDegree(e.target.value)}
               step='0.1'
               min='0'
               max='100'
        />
      </form>
      <Clock deg={degree*1.8}/>
    </div>
  );
};

export default App;
