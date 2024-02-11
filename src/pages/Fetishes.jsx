import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const Fetishes = () => {
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
        <h1 className="text-6xl heading text-[#ff8fab]  ">Fetishes</h1>
        <form onSubmit={submitFormHandler} className="w-full">
          <p className="text-8xl"> 👄</p>
          <textarea
            name=""
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full  text-black rounded outline-none bg-[#ff8fab]/80 placeholder:text-black  p-4 my-8 resize-none "
            placeholder="Type Something Here ..."
            rows={10}
          ></textarea>
          <button className="px-4 w-full py-4 bg-[#ff8fab] rounded text-white text-xl md:text-3xl hover:bg-[#ff8fab]/80 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fetishes;
