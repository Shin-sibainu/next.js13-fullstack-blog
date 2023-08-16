"use client";

import React, { Fragment } from "react";
import { Toaster } from "react-hot-toast";

const AddBlog = () => {
  const handleSubmit = () => {};
  return (
    <>
      <Toaster />
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-200 font-bold p-3">
            Add a Wonderful Blog 🚀
          </p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter Title"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2"
            />
            <textarea></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
