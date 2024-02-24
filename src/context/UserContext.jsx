// UserContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../server/appwrite";
const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const signIn = async (email, password) => {
    try {
      await account.createSession(email, password);
      const user = await account.get();
      setUser(user);
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  const signUp = async (id, email, password, name) => {
    try {
      await account.create(id, email, password, name);
      const user = await account.get();
      setUser(user);
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error("Sign Out Error:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
