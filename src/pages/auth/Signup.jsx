import SignupImage from "/assets/portfolio5.png";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { ID } from "appwrite";
import { useSpring, animated } from "react-spring";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const { signUp } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formAnimation = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
  });

  const inputAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
    delay: 300,
  });

  const titleAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 10 },
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await signUp(ID.unique(), email, password, name);
    setIsLoading(false);
    navigate("/signin");
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${SignupImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full mx-auto border-2 rounded-lg shadow-lg overflow-hidden">
        <animated.form
          style={formAnimation}
          className="p-6 flex flex-col gap-4 relative"
          onSubmit={handleSignUp}
        >
          <animated.h2
            style={titleAnimation}
            className="text-4xl font-bold uppercase text-indigo-600 mb-8 text-center gradient-text"
          >
            Sign Up
          </animated.h2>
          <animated.div
            className={"flex flex-col gap-4"}
            style={inputAnimation}
          >
            <div className="flex items-center border rounded-md px-4 py-2 relative">
              <FaUser className="mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full bg-transparent text-white focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-md px-4 py-2 relative">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full bg-transparent text-white focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-md px-4 py-2 relative">
              <FaLock className="mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full bg-transparent text-white focus:outline-none"
              />
            </div>
          </animated.div>
          <animated.button
            type="submit"
            className="px-4 py-2 bg-white text-indigo-900 rounded-md transition duration-300 hover:bg-indigo-100 focus:outline-none focus:ring focus:ring-white"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </animated.button>
          <div className="absolute inset-0 border border-indigo-500 rounded-lg pointer-events-none"></div>
        </animated.form>
      </div>
    </div>
  );
};

export default Signup;
