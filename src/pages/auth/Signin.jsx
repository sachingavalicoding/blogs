// Signin.js
import { useState } from "react";
import { useUser } from "../../context/UserContext";

const Signin = () => {
  const { signIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-red-900">
      <h2>Signin</h2>
      <form
        onSubmit={handleSignIn}
        className="w-1/2 mx-auto border-2  flex flex-col"
      >
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
