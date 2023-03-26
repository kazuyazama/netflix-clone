import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  logOut: () => {},
  signUp: () => {},
  signIn: () => {},
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const signUp = async (email, password) => {
    if (!email || !password) return;
    await setDoc(doc(db,"users",email),{
      savedShows:[]
    })
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { currentUser, setCurrentUser, logOut, signUp, signIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
