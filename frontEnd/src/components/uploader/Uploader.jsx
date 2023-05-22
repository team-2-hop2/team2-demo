import React, { useState } from 'react'
import axios from 'axios'

export const Uploader = () => {

    const [selectedImage, setSelectedImage] = useState()

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader()
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result)
          }
          fileReader.onerror = (error) => {
            reject(error)
          }
        })
      }
      const handleFileUpload = async (e) => {
        const file = e
        const base64 = await convertToBase64(file)
        console.log(base64)
        axios.post('http://localhost:8000/products', {
            name: "sarfan",
            size:["130", "140", "150"],
            price:"45000",
            color:["red", "yellow"],
            highlight:true,
            discount:true,
            image: [base64]
      
        })
      }

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
        <div className='bg-gray-500 h-screen'>
          <h1 className="text-3xl font-bold font-quicksand underline">
            Hello world!
          </h1>
          {selectedImage && (
            <div>
              <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
              <br/>
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}
    
          <input type="file" name="myImage"onChange={(event) => {console.log(event.target.files[0])
            setSelectedImage(event.target.files[0])}}/>
          <button className='bg-white' onClick={()=>handleFileUpload(selectedImage)}>Upload</button>
        </div>
      )
    
}
