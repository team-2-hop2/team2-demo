import React, { useState } from "react";
import axios from "axios";

export const Uploader = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImage1, setSelectedImage1] = useState();
  const [selectedImage2, setSelectedImage2] = useState();

  const handleFileUpload = async (e, f, g) => {
    await axios.post("http://localhost:8000/products", {
      name: "Oversize цамц",
      size: ["130", "140", "150"],
      price: "40000",
      highlight: false,
      discount: false,
      image: ["https://firebasestorage.googleapis.com/v0/b/terskhen.appspot.com/o/IMG_5594_2.jpg?alt=media&token=dfa3df1f-0de5-4790-830c-d04c00188f1b",
              "https://firebasestorage.googleapis.com/v0/b/terskhen.appspot.com/o/IMG_5598_1.jpg?alt=media&token=7c51eea8-9620-4c92-8cf6-bdfc3299c745"],
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
