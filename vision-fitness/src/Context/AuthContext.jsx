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
  const [isAuth, setIsAuth] = useState(false);

  function signup(username, email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((user: auth.UserCredential) => {
        user.user.updateProfile({
          displayName: username,
        });
      });
  }
  function login(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((UserCredential) => {
        setCurrentUser(UserCredential.user.displayName);
      });
  }
  function logout() {
    return auth.signOut();
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  // console.log(currentUser);
  // console.log(name);
  const value = {
    currentUser,
    signup,
    login,
    logout,
    isAuth,
    userName,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
