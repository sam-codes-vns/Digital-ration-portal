import { createContext, useContext, useEffect, useState } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Optional: check localStorage on load
  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    if (stored === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Optional: persist login status
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
