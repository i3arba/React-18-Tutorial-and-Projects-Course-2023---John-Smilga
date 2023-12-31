import { useState } from "react";

const ToggleChallenge = () => {
  const [isWaiting, setIsWaiting] = useState(false);

  // const changeResult = () => {
  //   if (isWaiting) {
  //     setIsWaiting(false);
  //     return;
  //   }
  //     setIsWaiting(true);
  // }

  return (
    // O que está comentado ali em cima, é substuido por essa linha aqui de baixo, da arrow function em diante.
    <div> 
      <button className="btn" type="button" onClick={() => setIsWaiting(!isWaiting)}>
        Metamask Disconnected
      </button>
      {isWaiting && <Logged />}
    </div>
  );
};

  const Logged = () =>{
    return <div className="alert alert-danger">Connected</div>;
  }

export default ToggleChallenge;
