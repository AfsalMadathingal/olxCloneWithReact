import React, { createContext, useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../../firebase/config'; 
import { toast } from "react-toastify";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [displayName,setDisplayName] =  useState("")
  const auth = getAuth(app);
  const db = getFirestore(app);

  const signup = async (name, email, password,phone) => {
    try {
 
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      await updateProfile(user, { displayName: name });
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name:name,
        phone:phone,
        authProvider: "local",
        email,
      });
      

    } catch (error) {
      console.log(error);
       
      toast.error(error.code.split('/')[1].split('-').join(" "))
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {

      console.log(error);
     
      throw error;
    }
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <FirebaseContext.Provider value={{ auth, db, signup, login, logout,displayName,setDisplayName }}>
      {children}
    </FirebaseContext.Provider>
  );
};
