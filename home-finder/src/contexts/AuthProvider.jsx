import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "@/config/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [authPageName, setAuthPageName] = useState(null);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateUser = (userInfo) => {
    setLoading(true);
    console.log(userInfo);
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  
  const searchUser = async (user) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/users/getUserById?uid=${user.uid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  };

  const googleLogIn = async (event) => {
    event.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await providerLogin(googleProvider);
      const user = result.user;

      console.log("user", user);
      const found = await searchUser(user);
      console.log("found", found);
      if (found.user?.length < 1) {
        const newUser = {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/users/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        );
        const data = await response.json();
        console.log(data);
      }

      // const result = await sendToServer(data, user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    providerLogin,
    updateUser,
    logOut,
    isAuthModalOpen,
    setIsAuthModalOpen,
    authPageName,
    setAuthPageName,
    setLoading,
    googleLogIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
