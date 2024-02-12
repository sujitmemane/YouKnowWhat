import React from "react";
import { categoriesData } from "../content";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex  justify-center w-full  h-full  items-center">
      <div className="flex flex-col items-center justify-cennter  space-y-12">
        <h1 className="text-8xl heading text-[#ff8fab]  ">ykw.</h1>
        <p className="text-3xl capitalize font-bold   ">
          Reveal Things Anonymously
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 mt-16 ">
          {categoriesData.map((category) => (
            <Link key={category.id} to={`${category.path}`}>
              <div className="px-16 py-12 bg-[#ff8fab] rounded text-white">
                <p className="text-2xl font-semibold uppercase">
                  {category.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-2xl  capitalize font-bold  max-w-3xl flex  items-center space-x-3 ">
          <p>Made With </p> <FaHeart className="text-[#ff8fab]" />
        </p>
      </div>
    </div>
  );
};

export default Home;
