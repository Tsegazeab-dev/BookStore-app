import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function EditPage() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [prevData, setPrevData] = useState({});
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);

    fetch(`/api/book/get-book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPrevData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error getting book data", err);
        setLoading(false);
      });

    // axios.get(`/api/book/get-book/${id}`)
    // .then((res)=>{
    //   setPrevData(res.data)
    //   setLoading(false)
    // })
    // .catch(err => {
    //   console.log("Error getting book data", err);
    //   setLoading(false)
    // })
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`/api/book/update/${id}`, {
      method : 'PUT',
      headers: {'Content-Type': 'application/json'},
      body   : JSON.stringify(formData),
    })
    .then((res)=>res.json())
    .then(()=>{
      setLoading(false);
        formRef.current.reset();
        enqueueSnackbar("Book updated successfully", { variant: "success" });
        navigate("/");
    })
    .catch((err) => {
          setLoading(false);
          enqueueSnackbar("An error occurred while updating the book", {
            variant: "error",
          });
          console.log("Error in editing book", err.message);
        });

        
    // axios
    //   .put(`/api/book/update/${id}`, formData)
    //   .then(() => {
    //     setLoading(false);
    //     formRef.current.reset();
    //     enqueueSnackbar("Book updated successfully", { variant: "success" });
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     enqueueSnackbar("An error occurred while updating the book", {
    //       variant: "error",
    //     });
    //     console.log("Error in editing book", err.message);
    //   });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-sky-400 rounded-xl max-w-lg p-4 mx-auto"
      >
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={prevData.title}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            name="author"
            defaultValue={prevData.author}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2  w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            name="publishedYear"
            defaultValue={prevData.publishedYear}
            onChange={handleChange}
            className="border-2 border-gray-500 px-4 py-2  w-full rounded-lg"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8 rounded-md">
          {loading ? "updating ..." : "Edit"}
        </button>
      </form>
    </div>
  );
}

export default EditPage;
