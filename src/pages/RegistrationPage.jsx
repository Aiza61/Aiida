import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register, error } = useAuth();

  function handleRegister() {
    register(username, password);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleRegister()}>Register</button>
    </div>
  );
};

export default RegistrationPage;
