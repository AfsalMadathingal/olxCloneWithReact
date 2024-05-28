import React, { createContext, useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../../firebase/config";
import { toast } from "react-toastify";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [displayName, setDisplayName] = useState("");
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const signup = async (name, email, password, phone) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      await updateProfile(user, { displayName: name });
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name: name,
        phone: phone,
        authProvider: "local",
        email,
      });
    } catch (error) {
      console.log(error);

      toast.error(error.code.split("/")[1].split("-").join(" "));
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

  const logout = async () => {
    signOut(auth);
  };

  const uploadFile = async (file, category, name, price) => {
    return new Promise((resolve, reject) => {
      try {
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytes(storageRef, file);

        uploadTask
          .then(async (snapshot) => {
            const downloadURL = await getDownloadURL(snapshot.ref);

            await addDoc(collection(db, "products"), {
              name,
              category,
              price,
              downloadURL,
              userId: auth.currentUser.uid,
              createdAt: new Date().toDateString(),
            });
            toast.success("Product Added successfully");
            resolve("done");
          })
          .catch((error) => {
            toast.error(error.message);
            console.log("Upload error", error);
            reject(error);
          });
      } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
        reject(error);
      }
    });
  };

  const getProducts = async () => {
    try {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);

      return new Promise((resolve, reject) => {
        try {
          const productsList = productsSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });

          
          resolve(productsList);
        } catch (error) {
          reject(error);
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };


 const  getSingleProduct = async (id)=>{
    try {
      

      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);

      return new Promise((resolve, reject) => {
        try {
          const productsList = productsSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          const product = productsList.find((product) => product.id === id);
          resolve(product);

    } catch (error) {
      console.log(error);
      reject(error);
    }})

  }catch(error){
    console.log(error);
  }

  }

  // const getUser = as

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        db,
        signup,
        login,
        logout,
        displayName,
        setDisplayName,
        uploadFile,
        getProducts,
        getSingleProduct,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
