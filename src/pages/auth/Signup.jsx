// Signup.js
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { ID } from "appwrite";

const Signup = () => {
  const { signUp } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    signUp(ID.unique(), email, password, name);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-red-900">
      <h2>Sign Up</h2>
      <form
        className="w-1/2 mx-auto border-2  flex flex-col"
        onSubmit={handleSignUp}
      >
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
