import React, { useState } from 'react';
import Form from './components/Form';

function App() {

  const [ people, setPeople ] = useState([]);

  return (
    <Form 
    people={people}  
    setPeople={setPeople}
    />
  );
}

export default App;
