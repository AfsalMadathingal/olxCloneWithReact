import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { FirebaseContext } from "./store/FirebaseContext.jsx";
import firebase from "../firebase/config.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseContext.Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>
);
