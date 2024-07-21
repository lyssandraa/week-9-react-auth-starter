import { useState } from "react";

import "./Signup.css";
import { signUp } from "../../../utils/fetch";

const Signup = ({ handleChange, handleSubmit, logOrSignSetters }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const testSign = (username, email, password) => {
  //   console.log("test is working");
  //   console.log(username, password);
  //   return {
  //     message: "success",
  //     user: {
  //       id: 1,
  //       username: "michael",
  //     },
  //   };
  // };

  return (
    <div className="flex flex-column signup">
      <form
        onSubmit={(e) =>
          handleSubmit(e, signUp, logOrSignSetters, username, email, password)
        }
        className="flex flex-column signup-form"
      >
        <h3>Signup</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setEmail)}
            type="email"
            placeholder="Email..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
