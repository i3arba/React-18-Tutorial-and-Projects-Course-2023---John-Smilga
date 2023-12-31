import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
//Em condições normais, o useEffet só renderizaria uma vez quando colocamos o array de dependências vazio no final. Mas, nesse caso estamos usando o Toggle. Quando clicamos no botão, o toggle monta e desmonta o elemento. Ou seja, é como se tivesse reiniciando e por isso, tudo renderiza novamente.
// const RandomComponent = () => {
//   useEffect(() =>{
//     console.log('hmm, this is interesting');
//   },[])
//   return (
//     <h1>hello there</h1>
//   )
// }

// Usando cleanUp functions
// const RandomComponent = () => {
//   useEffect(() => {
//     // console.log("hmm, this is interesting");

//     const intId = setInterval(() => {
//       // console.log("hello from interval");
//       }, 1000);

//       return () => {
//         clearInterval(intId);
//         console.log('cleanup');
//       }
//   }, []);
//   return <h1>hello there</h1>;

//Usando event listeners
const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      //some logic
    }
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
    
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
