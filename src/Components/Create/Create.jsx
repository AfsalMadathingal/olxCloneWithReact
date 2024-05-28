import React, { Fragment, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useFirebase } from "../../store/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

const Create = () => {
  const [image, setImage] = useState("");
  const { uploadFile } = useFirebase();
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const categoryRegx = /^[a-zA-Z\s]*$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (image.length === 0) {
      toast.error("Please select an image");
      setLoading(false);
      return;
    } else if (name.length === 0) {
      toast.error("Please enter a name");
      setLoading(false);

      return;
    } else if (category.length === 0 || !categoryRegx.test(category)) {
      toast.error("Please enter a valid category");
      setLoading(false);

      return;
    } else if (price === null) {
      toast.error("Please enter a price");
      setLoading(false);

      return;
    } else if (price < 0) {
      toast.error("Please enter a valid price");
      setLoading(false);

      return;
    }
    await uploadFile(image, name, category, price);
    setLoading(false);
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col w-96 lg:w-1/4 justify-center align-middle border  border-black mx-auto my-10 p-8  ">
        <form>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            id="fname"
            name="Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            id="fname"
            name="category"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="number"
            id="fname"
            name="Price"
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
          <br />
        </form>
        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={
            image
              ? URL.createObjectURL(image)
              : "https://picsum.photos/200/300/?blur"
          }
        ></img>
        <form>
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          {loading ? (
           <div className="flex justify-center">
           <ReactLoading type="bars" color="black" height={50} width={50} />
         </div>
          ):<button onClick={handleSubmit} className="uploadBtn">
          Upload and Submit
        </button>}
          
        </form>
      </div>
    </>
  );
};

export default Create;
