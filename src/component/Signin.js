import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const Navigate = useNavigate();
  const handleChange = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else {
      setPwd(e.target.value);
    }
  };
  const handleSubmit = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", pwd);
    Navigate("/");
  };

  const remove = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Password");
    // localStorage.clear();
  };
  return (
    <div className="App">
      <h1>Name of the user:</h1>
      <input
        placeholder="Name"
        value={name}
        name="name"
        onChange={(e) => handleChange(e, "name")}
      />
      <h1>Password of the user:</h1>
      <input
        type="password"
        placeholder="Password"
        value={pwd}
        name="password"
        onChange={(e) => handleChange(e, "password")}
      />
      <div>
        <button onClick={() => handleSubmit()}> LogIn</button>
      </div>
      {localStorage.getItem("Name") && (
        <div>
          Name: <p>{localStorage.getItem("Name")}</p>
        </div>
      )}
      {localStorage.getItem("Password") && (
        <div>
          Password: <p>{localStorage.getItem("Password")}</p>
        </div>
      )}
      <div>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default SignIn;
