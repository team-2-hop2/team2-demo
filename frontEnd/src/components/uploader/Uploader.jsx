import React, { useState } from "react";
import axios from "axios";

export const Uploader = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImage1, setSelectedImage1] = useState();
  const [selectedImage2, setSelectedImage2] = useState();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
        // console.log(fileReader.result.replace("data:application/octet-stream", "data:image/jpeg"));
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e, f, g) => {
    const file = e;
    const file1 = f;
    const file2 = g;
    // const base64 = await convertToBase64(file)
    // const base65 = await convertToBase64(file1)
    // const base66 = await convertToBase64(file2)
    // console.log(base64)
    await axios.post("http://localhost:8000/products", {
      name: "test",
      size: ["130", "140", "150"],
      price: "50000",
      highlight: true,
      discount: true,
      image: [file, file1, file2],
    })
    .then((res)=> {console.log(res)});
  };

  // exports.uploadIMG = async (request, response, next) => {
  //     const id = await generateId()
  //     const image_data = await IMGModel.create({_id:id,...request.body})
  //     response
  //     .status(201)
  //     .json({message: "Post request successful.", data: image_data})
  // }

  // exports.getIMG = async (request, response, next) => {
  //     const id = await generateId()
  //     const image_data = await IMGModel.create({_id:id,...request.body})
  //     response
  //     .status(201)
  //     .json({message: "Post request successful.", data: image_data})
  // }
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
