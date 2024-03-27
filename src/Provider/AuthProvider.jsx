
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  
  signOut,
  updateProfile,
} from "firebase/auth";


import { auth } from "../Firebase/Firebase.Confiq";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [allTask,setAllTask]=useState([])
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

 

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user: ", currentUser);
      setLoading(false);
    });
  
    return () => {
      return unsubscribe();
    };
  }, []); 
  
  
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    updateUser,
    logout,
    setUser,
    setAllTask,
    allTask,
    
  };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
  };
export default AuthProvider;