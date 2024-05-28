import React, { useContext, useEffect, useState } from "react";
import "./View.css";
import { PostContext } from "../../store/PostContext";
import { useFirebase } from "../../store/FirebaseContext";

function View({ id }) {
  const [userDetails, setUserDetails] = useState();
  const [postDetails, setPostDetails] = useState({});
  const [singleLoading,setSingleLoading] = useState(true)
  const { getSingleProduct } = useFirebase();


  useEffect(() => {
    getSingleProduct(id)
      .then((result) => {
        setPostDetails(result);
        console.log("result", result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className="flex bg-slate-100 ms-56 w-4/5 shadow-lg p-10 mt-11 gap-10 border border-gray-400 rounded ">
      <div className="w-1/2 ">
        <img className="rounded shadow-sm" src={postDetails.downloadURL} alt="" />
      </div>
      <div className="">
        <div className="bg-white mb-10 w-96 py-5 px-5 border border-gray-200">
          <p className="text-2xl font-semibold pb-6">&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className=" bg-white py-2 px-5  border border-gray-200">
          <p className="font-semibold  text-2xl"> <i className="fa-solid fa-user"></i> Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
