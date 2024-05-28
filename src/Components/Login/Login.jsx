import React, { useRef, useState } from "react";
import Logo from "../../assets/olx-logo.png";
import "./Login.css";
import { useFirebase } from "../../store/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logiBg from "../../assets/login-bg.png";
import ReactLoading from "react-loading";

function Login() {
  const { login } = useFirebase();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [emailError,setEmailError] = useState(false)
  const [passError,setPassError] = useState(false)
  const emailRef = useRef()
  const passRef = useRef()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailRegex.test(email)) {
      toast.error("Please Enter a valid email");
      emailRef.current.focus();
      emailRef.current.style.border = "1px solid red";
      setEmailError(true);
      setLoading(false);
      return;
    }
    else if(!password || password.length < 6) {
      passRef.current.style.border = "1px solid red";
      passRef.current.focus();
      toast.error("Password is wrong");
      emailRef.current.style.border = "1px solid black";
      setEmailError(false);
      setPassError(true);
      setLoading(false);
      return
    }

    login(email, password)
      .then(() => {
        navigate("/");
        setLoading(true);
      })
      .catch((error) => {
        toast.error(error.code.split("/")[1].split("-").join(" "));
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div
      className="bg-slate-300 w-100vh h-[100vh] "
      style={{ backgroundImage: `url(${logiBg})` }}
    >
      <div className="loginParentDiv bg-white  w-96 p-6 shadow-lg">
        <div className="flex justify-center">
          <img width="200px" height="200px" src={Logo}></img>
        </div>

        <form onSubmit={handleSubmit}>
          <p className="text-black font-bold">Email</p>
          {emailError && <p className="text-red-500">Please Enter Valid Email</p>}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
          <br />
          <p className="text-black font-bold mb-2 mt-2">Password</p>

          {passError && <p className="text-red-500">Password is Wrong</p> }
          
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            ref={passRef}
          />
          <br />
          <br />
          {loading ? (
            <div className="flex justify-center">
              <ReactLoading type="bars" color="black" height={50} width={50} />
            </div>
          ) : (
            <button type="submit">Login</button>
          )}
        </form>
        <div
          onClick={() => {
            navigate("/signup");
          }}
          className="border-2 border-black flex text-white justify-center mt-4 items-center cursor-pointer hover:bg-white hover:text-black bg-black"
        >
          <p className=" py-2 px-0 cursor-pointer hover:text-black font-semibold">
            Signup
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
