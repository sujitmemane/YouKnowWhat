import React from "react";

const Confessions = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-4xl md:text-6xl">Confessions</h1>

        <textarea
          name=""
          id=""
          className="w-full border-[3px] border-black outline-none  p-4 my-8 resize-none "
          placeholder="Write Something Here ..."
          rows={10}
        ></textarea>
        <button className="px-4 w-full py-4 bg-black text-white text-xl md:text-3xl hover:bg-[#212529] ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Confessions;
