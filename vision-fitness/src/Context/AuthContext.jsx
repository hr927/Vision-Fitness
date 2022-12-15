import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  function signup(username, email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((user: auth.UserCredential) => {
        user.user.updateProfile({
          displayName: username,
        });
      });
    setUserName(username);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
