import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const Login = () => {
    //geralmente aqui nós conectamos com o db ou api
    setUser({name:"Barba"});//objeto
  };
  const Logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={Logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={Login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
