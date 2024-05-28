import React, { useEffect, useState } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { useFirebase } from "../../store/FirebaseContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { displayName,setDisplayname, logout } = useFirebase();
  const [name,setName] = useState(displayName)
  const [arrowUp, setArrowUp] = useState(false);
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      setName("");
      setDisplayname("");
    });
  };



  return (
    <>
        <div className="py-2 bg-slate-200">
      <div className="flex justify-between">
        <div
          onClick={() => navigate("/")}
          className=" mx-5 brandName cursor-pointer"
        >
          <OlxLogo></OlxLogo>
        </div>

        <div className="flex items-center gap-2">
          <input
            className="w-full md:w-1/2 h-11 focus:ring-2 focus:border-white border border-black focus:ring-[#50c7d4] focus:outline-none rounded px-5"
            type="text"
            placeholder="Search Place or Area"
          />

          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                className="focus:ring-2 focus:ring-[#50c7d4] focus:outline-none px-5"
                placeholder="Find car,mobile phone and more..."
              />
            </div>
          </div>
          <div className="searchAction bg-[#002f34] p-3 rounded cursor-pointer hover:bg-[#32939e]">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="hidden sm:flex sm:gap-10 sm:justify-center sm:items-center lg:flex lg:gap-10 lg:justify-center lg:items-center">
          <div
            onClick={() => setArrowUp(!arrowUp)}
            className="flex gap-2 font-semibold text-[20px] cursor-pointer "
          >
            <p> ENGLISH </p>
            {arrowUp ? (
              <i className="fa-solid fa-caret-up py-1"></i>
            ) : (
              <i className="fa-solid fa-caret-down py-1"></i>
            )}
            {arrowUp && (
              <div className="bg-white  w-[100px] p-2 top-20 shadow-lg border border-[#002f34]  z-10 absolute">
                <p className="cursor-pointer border-b border-[#002f34] pb-5">
                  English
                </p>
                <p className="cursor-pointer border-b py-4 border-[#002f34] pb-5">
                  हिंदी
                </p>
              </div>
            )}
          </div>

          {name ? (
            <>
              <p className="align-middle font-semibold">{`Welcome ${displayName}`}</p>
              <span
                className="cursor-pointer text-[#000000] font-bold"
                onClick={() => {
                  handleLogout();
                }}
              >
                {" "}
                <i className="fa-solid fa-right-from-bracket"></i> Logout{" "}
              </span>
            </>
          ) : (
            <>
           
              <p
                className="cursor-pointer text-[#002f34] font-bold"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </p>
            </>
          )}
          <hr />
          <div onClick={() => navigate("/create")} className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </div>
        <div className="lg:hidden font-bold h-5 w-24 pt-6 cursor-pointer flex justify-center items-center">
          <i className="fa-solid fa-bars  lg:hidden text-[40px] text-black"></i>
        </div>
      </div>
    </div>
    </>

  );
}

export default Header;
