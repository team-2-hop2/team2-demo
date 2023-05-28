import React, { useState } from "react";
import axios from "axios";

export const Uploader = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImage1, setSelectedImage1] = useState();
  const [selectedImage2, setSelectedImage2] = useState();

  const handleFileUpload = async (e, f, g) => {
    await axios.post("http://localhost:8000/products", {
      name: "Hoodie",
      size: ["130", "140", "150"],
      price: "45000",
      highlight: false,
      discount: false,
      image: ["https://firebasestorage.googleapis.com/v0/b/terskhen.appspot.com/o/IMG_5781.jpg?alt=media&token=ebfaa295-1ab7-404c-8ba0-6b1a90442367",
              "https://firebasestorage.googleapis.com/v0/b/terskhen.appspot.com/o/IMG_5782.jpg?alt=media&token=c392c39d-91d1-4edb-9d5c-24f3f0f49f12"],
    })
    .then((res)=> {console.log(res)});
  };

  return (
    <div className="bg-gray-500 h-screen">
      <h1 className="text-3xl font-bold font-quicksand underline">
        Hello world!
      </h1>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage1(event.target.files[0]);
        }}
      />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage2(event.target.files[0]);
        }}
      />
      <button
        className="bg-white"
        onClick={() =>
          handleFileUpload(selectedImage, selectedImage1, selectedImage2)
        }
      >
        Upload
      </button>
    </div>
  );
};
