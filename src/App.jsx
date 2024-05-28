import { useState, useEffect, useLayoutEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "../../olx/src/Pages/Home";
import Signup from "../../olx/src/Pages/Signup";
import Login from "../../olx/src/Pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebase } from "./store/FirebaseContext";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Post from "./store/PostContext";

function App() {
  const { setDisplayName, auth } = useFirebase();


  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setDisplayName(user.displayName);
    });
  }, []);

  return (
    <>
      <div>
        <Post>
          <ToastContainer theme="dark" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view/:id" element={<View />} />
          </Routes>
        </Post>
      </div>
    </>
  );
}

export default App;
