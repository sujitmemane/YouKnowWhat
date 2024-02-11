import React from "react";
import { categoriesData } from "../content";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex  justify-center w-full  h-full  items-center">
      <div className="flex flex-col items-center justify-cennter  space-y-4">
        <h1 className="text-5xl md:text-6xl lg:text-8xl">You Know What</h1>
        <p className="text-2xl md:text-4xl capitalize font-normal  max-w-3xl">
          What do you want to share with the world without revealing your
          identity?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 mt-16 ">
          {categoriesData.map((category) => (
            <Link key={category.id} to={`${category.path}`}>
              <div className="px-16 py-12 hover:bg-[#212529] bg-black text-white">
                <p className="text-4xl">{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
