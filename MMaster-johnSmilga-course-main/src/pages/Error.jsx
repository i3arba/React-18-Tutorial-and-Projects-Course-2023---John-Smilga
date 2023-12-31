import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status === 404){
    return <Wrapper>
      <div>
        <img src={img} alt="not fount" />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  }
  return <Wrapper>
    <div>
      <h3> something went wrong</h3>
    </div>
  </Wrapper>
};

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Error;
