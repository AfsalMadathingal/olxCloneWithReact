import React from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { useFirebase } from "../../store/FirebaseContext";
import { useNavigate } from "react-router-dom";

function Header() {

  const { displayName, logout } = useFirebase();

  const navigate = useNavigate();

  console.log("display",displayName);

  const handleLogout = () => {
    logout().then(()=>{
      navigate("/");
    })
    
  };

  return (
    <div className="py-2 bg-slate-200">
      <div className="headerChildDiv">
        <div onClick={() => navigate("/")} className=" mx-5 brandName cursor-pointer">
          <OlxLogo></OlxLogo>
        </div>
        <div className="place-and-search flex items-center gap-2">
          <div className="placeSearch ">
            <Search></Search>
            <input type="text" placeholder="Search Place or Area" />
            <Arrow></Arrow>
          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                className="focus:ring-2 focus:ring-[#50c7d4] focus:outline-none "
                placeholder="Find car,mobile phone and more..."
              />
            </div>
          </div>
          <div className="searchAction bg-[#002f34] p-3 rounded cursor-pointer hover:bg-[#32939e]">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="left-items flex gap-10 justify-center align-middle ">
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        
          { displayName ? (
            <p className="align-middle">{`Welcome ${displayName}`}</p>
          ) : (
            <p
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </p>
          )}
          <hr />
 
        {displayName && (
          <span
            onClick={() => {
              handleLogout();
            }}
          >
            {" "}
            Logout{" "}
          </span>
        )}
        <div onClick={() => navigate("/create")} className="sellMenu">
          <SellButton></SellButton>
          <div  className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
