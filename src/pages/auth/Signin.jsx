import SigninImage from "/assets/sign-img.jpg";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useSpring, animated } from "react-spring";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const { signIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // Animation for the form
  const formAnimation = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
  });

  // Animation for input fields
  const inputAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
    delay: 300,
  });

  // Animation for the form title
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 10 },
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn(email, password);
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${SigninImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full mx-auto border-2 rounded-lg shadow-lg overflow-hidden">
        <animated.form
          style={formAnimation}
          className="p-6 flex flex-col gap-4 relative"
          onSubmit={handleSignIn}
        >
          <animated.h2
            style={titleAnimation}
            className="text-4xl uppercase text-indigo-600 font-bold mb-8 text-center gradient-text"
          >
            Sign In
          </animated.h2>
          <animated.div
            className={"flex flex-col gap-4"}
            style={inputAnimation}
          >
            <div className="flex items-center border rounded-md px-4 py-2 relative">
              <FaEnvelope className="text-indigo-500 mr-2" />
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
              <FaLock className="text-indigo-500 mr-2" />
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
            {isLoading ? "Signing In..." : "Sign In"}
          </animated.button>
          <div className="absolute inset-0 border border-indigo-500 rounded-lg pointer-events-none"></div>
        </animated.form>
      </div>
    </div>
  );
};

export default Signin;
