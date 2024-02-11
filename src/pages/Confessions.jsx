import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const Confessions = () => {
  const [message, setMessage] = useState("");
  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "data"), {
        category: "confession",
        message,
      });
      console.log("Document written with ID: ", docRef.id);
      setMessage(" ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-4xl md:text-6xl">Confessions</h1>
        <form onSubmit={submitFormHandler} className="w-full">
          <textarea
            name=""
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-[3px] border-black outline-none  p-4 my-8 resize-none "
            placeholder="Write Something Here ..."
            rows={10}
          ></textarea>
          <button className="px-4 w-full py-4 bg-black text-white text-xl md:text-3xl hover:bg-[#212529] ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Confessions;
