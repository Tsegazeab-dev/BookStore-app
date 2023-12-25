// import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function DeletePage() {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/book/delete/${id}`, {
        method: 'DELETE'
      });
      await res.json();
      if (res.ok) {
       setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      }
      
    } catch (error) {
      setLoading(false);
        enqueueSnackbar("Error deleting book", { variant: "error" });
        console.error(error);
    }

    // axios
    //   .delete(`/api/book/delete/${id}`)
    //   .then(() => {
    //     setLoading(false);
    //     enqueueSnackbar("Book deleted successfully", { variant: "success" });
    //     navigate("/");
    //   })
    //   .catch((e) => {
    //     setLoading(false);
    //     enqueueSnackbar("Error deleting book", { variant: "error" });
    //     console.log(e);
    //   });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-slate-400 rounded-xl max-w-lg p-8 mx-auto">
        <h3 className="text-3xl">Are You Sure You want to delete this book?</h3>

        <button
          className="p-4 bg-red-700 text-white m-8 w-full"
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default DeletePage;
