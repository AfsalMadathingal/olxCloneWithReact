import React, { useContext, useEffect, useState } from "react";
import "./View.css";
import { PostContext } from "../../store/PostContext";
import { useFirebase } from "../../store/FirebaseContext";
import ReactImageZoom from "react-image-zoom";
import ViewSkeleton from "../Skeloton/ViewSkeleton";

function View({ id }) {

  const [userDetails, setUserDetails] = useState();
  const [postDetails, setPostDetails] = useState({});
  const [singleLoading, setSingleLoading] = useState(true);
  const { getSingleProduct } = useFirebase();
  const [image, setImage] = useState(null);


  useEffect(() => {
    getSingleProduct(id)
      .then((result) => {
        console.log("result from then", result);
        setPostDetails(result);
        setSingleLoading(false);
        setImage({ img: result.downloadURL });
        console.log("result", result.downloadURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {}, [image]);

  return (
    <>
      {singleLoading ? (
        <ViewSkeleton />
      ) : (
<div className="bg-slate-100 lg:ms-56 sm:ms-8 w-full lg:w-4/5 shadow-lg p-10 mt-11 border border-gray-400 rounded mb-10 mx-auto">
  <div className="flex flex-col lg:flex-row gap-10">
    <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
      {image ? <ReactImageZoom {...image} className="max-w-full max-h-1/2" /> : ""}
    </div>
    <div className="flex flex-col gap-10 w-full lg:w-1/2">
      <div className="bg-white shadow-lg py-5 px-5 border border-gray-200">
        <p className="text-2xl font-semibold pb-6">&#x20B9; {postDetails.price} </p>
        <span>{postDetails.name}</span>
        <p>{postDetails.category}</p>
        <span>{postDetails.createdAt}</span>
      </div>
      <div className="bg-white py-2 px-5 shadow-lg border border-gray-200">
        <p className="font-semibold text-2xl"><i className="fa-solid fa-user"></i> Seller details</p>
        <p>{postDetails.sellerName}</p>
        <p>{postDetails.phone}</p>
        <a href={`tel:${postDetails.phone}`}>
          <button className="btn p-2 mt-2 hover:bg-white hover:border border hover:text-black border-bg-[#002f34] bg-[#002f34] text-white">
            <i className="fa-solid fa-phone"></i> Contact Seller
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

      )}
    </>
  );
}
export default View;
