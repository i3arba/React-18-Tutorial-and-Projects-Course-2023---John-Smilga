import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age:24,
    hobby:'read books',
  })

  const displayPerson = () => {
    setPerson({name: 'john', age:28, hobby: 'scream at the computer'})
  }
  
  const { name, age, hobby } = person;

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys: {hobby}</h3>
      <button className="btn" onClick={displayPerson}>Show John</button>
    </>
  );
};

export default UseStateObject;
