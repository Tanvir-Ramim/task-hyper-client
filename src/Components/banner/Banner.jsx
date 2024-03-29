

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="h-[70vh] lg:h-screen">
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/YykbVvX/the-pros-and-cons-of-paper-to-do-lists.jpg)",
        }}
      >
        <div className="bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0.00)] ml-0 md:ml-auto h-[70vh] lg:h-screen w-full  mx-auto lg:mr-12 text-center md:text-right text-red-400 drop-shadow-lg">
          <div className="mt-[150px] md:mr-12">
            <p className="mb-2 text-start ml-5 lg:text-2xl text-white">
              Start your daily tasks with
            </p>
            <h1 className="mb-5 text-4xl lg:text-7xl text-start ml-5 text-pink-400 font-bold">TaskTracker</h1>
            <Link to="/taskBoard">
            <button className="text-black grid items-center ml-5  rounded-md h-8 px-6 lg:h-12 bg-pink-400 lg:mt-8 text-Black drop-shadow-lg border-none text-xl font-semibold ">Let’s Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;