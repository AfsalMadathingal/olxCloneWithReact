import { useState, useEffect, useLayoutEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
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
import "rsuite/dist/rsuite.min.css";
import ReactLoading from "react-loading";

function App() {
  const { setDisplayName, auth } = useFirebase();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setDisplayName(user?.displayName ? user.displayName : "");
      if (
        user &&
        (location.pathname === "/login" || location.pathname === "/signup")
      ) {
        navigate("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate, setDisplayName, location.pathname]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <ReactLoading type="bars" color="#002f34" height={50} width={50} />
      </div>
    );
  }

  return (
    <div className="text-black">
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
  );
}
export default App;
