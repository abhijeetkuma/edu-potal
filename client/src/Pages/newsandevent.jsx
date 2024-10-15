import React, { useState, useRef } from "react";
import axios from "axios";

const Newsandevent = () => {
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }
  const [image, setImage] = useState();
  const fileUploadRef = useRef();

  const uploadimage = (e) => {
    // e.preventDefault();
    // fileUploadRef.current.click();
    try {
      axios.post("/api/image-upload", {
        //ADD AXIOS POST REQUEST
        value: "This is my awesome test value!",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const uploadedimgDispy = async () => {
    try {
      const uploadedfile = fileUploadRef.current.files[0];
      const formData = new FormData();
      formData.append("file", uploadedfile);
      const cashedImg = URL.createObjectURL(uploadedfile);
      setImage(cashedImg);
      const response = await fetch("/api/newsevents", {
        method: "post",
        body: formData,
      });
      if (response.status === 201) {
        const data = await response.json();
        setImage(data?.location);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">Add News and Event Form</h1>
        </div>
      </div>
      <img src={image} />
      <form action="" method="post" encType="multipart/form-data">
        <input
          type="file"
          name="image"
          ref={fileUploadRef}
          onChange={uploadedimgDispy}
        />
        <button type="submit" onClick={uploadimage}>
          Submit
        </button>
      </form>
    </>
  );
};
export default Newsandevent;
