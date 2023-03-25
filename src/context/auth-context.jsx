import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  logOut: () => {},
  signUp: () => {},
  signIn: () => {},
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signUp = async (email, password) => {
    if (email || password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    if (email || password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser, logOut, signUp, signIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
