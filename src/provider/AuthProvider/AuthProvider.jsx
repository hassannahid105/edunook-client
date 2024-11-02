import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // ! createUserWithEmailAndPassword
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  !  Google signInWithPopup
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };
  //  !  Facebook signInWithPopup
  const facebookSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  //   ! sing out use
  const logOut = async () => {
    setIsLoading(false);
    return signOut(auth)
      .then(() => {
        console.log("singout successful");
        setuser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ! user profile update
  const profileUpdate = () => {
    console.log();
    setIsLoading(true);
    return updateProfile(auth.currentUser);
  };
  // !  on auth state change
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(false);
        return setuser(user);
      } else {
        logOut();
      }
    });
    return () => {
      unSubcribe();
    };
  }, []);
  const authInfo = {
    createUser,
    googleSignIn,
    facebookSignIn,
    user,
    isLoading,
    profileUpdate,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
