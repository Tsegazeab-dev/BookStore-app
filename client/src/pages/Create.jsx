import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const Create = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`/api/book/add-books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book added successfully", { variant: "success" });
        navigate("/");
      })

      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error in adding book", { variant: "error" });
        console.log("Error in adding book", error.message);
      });
    // axios
    //   .post(`/api/book/add-books`, formData)
    //   .then(() => {
    //     setLoading(false);
    //     enqueueSnackbar("Book added successfully",{variant:"success"})
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     setLoading(false)
    //     enqueueSnackbar("Error in adding book", {variant: "error"})
    //     console.log("Error in adding book", err.message);
    //   });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-sky-400 rounded-xl max-w-lg p-4 mx-auto"
      >
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2  w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            name="publishedYear"
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2  w-full rounded-lg"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8 rounded-md">
          {loading ? "Loading ..." : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default Create;
