import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  function handleLogin() {
    login(username, password);
  }

  return (
    <div className="row align-items-center">
      <h2>{error}</h2>
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

      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
};

export default LoginPage;
