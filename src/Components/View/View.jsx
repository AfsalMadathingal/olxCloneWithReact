import React, { useContext, useEffect, useState } from "react";
import "./View.css";
import { PostContext } from "../../store/PostContext";
import { useFirebase } from "../../store/FirebaseContext";
import ReactImageZoom from 'react-image-zoom';
import ViewSkeleton from "../Skeloton/ViewSkeleton";

function View({ id }) {
  const [userDetails, setUserDetails] = useState();
  const [postDetails, setPostDetails] = useState({});
  const [singleLoading,setSingleLoading] = useState(true)
  const { getSingleProduct } = useFirebase();
  const [image,setImage] = useState(null)

  useEffect(() => {
    getSingleProduct(id)
      .then((result) => {
        setPostDetails(result);
        setSingleLoading(false);
        setImage({img:result.downloadURL})
        console.log("result", result.downloadURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    
  }, [image]);




  return (
    <>
     {singleLoading?
    <ViewSkeleton/>:
    <div className="lg:flex lg:justify-even   bg-slate-100 ms-56 w-4/5 shadow-lg p-10 mt-11 gap-10 border border-gray-400 rounded mb-10">
      <div className="w-1/2 h-4/5">{
        image?  <ReactImageZoom {...image} /> : ""
      }
       
      </div>
      <div className="">
        <div className="bg-white shadow-lg mb-10 w-96 py-5 px-5 border border-gray-200">
          <p className="text-2xl font-semibold pb-6">&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className=" bg-white py-2 px-5 shadow-lg  border border-gray-200">
          <p className="font-semibold  text-2xl"> <i className="fa-solid fa-user"></i> Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
          <a href="tel:+91 1234567890">
          <button className="btn p-2 mt-2 hover:bg-white hover:border border hover:text-black border-bg-[#002f34] bg-[#002f34] text-white"><i className="fa-solid fa-phone"></i> Contact Seller</button>
          </a>
        </div>
      </div>
    </div>

    }
    </>
   
  );
}
export default View;
