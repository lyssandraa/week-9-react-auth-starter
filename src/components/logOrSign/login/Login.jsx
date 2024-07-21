import { useState } from "react";

import "./Login.css";
import { logIn } from "../../../utils/fetch";

const Login = ({ handleChange, handleSubmit, logOrSignSetters }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-column login">
      <form
        onSubmit={(e) =>
          handleSubmit(e, logIn, logOrSignSetters, username, password)
        }
        className="flex flex-column login-form"
      >
        <h3>Login</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
