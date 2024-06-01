import React from "react";
import Navbar from "./Navbar";
import bg_image_banner from "../assets/home-banner-background.png";
import bg_home_banner from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Navbar />

        <div className="home-banner-background absolute top-0 right-0 -z-10">
          <img src={bg_image_banner} alt="" width={600} />
        </div>

        <div className="bg-image-title max-w-100 flex flex-col md:flex-row lg:flex-row justify-around items-center gap-14 m-11 mx-auto">
          <div className="title-text flex flex-col justify-around items-center gap-8 m-14 md:m-1 lg:m-1">
            <h1 className="text-5xl p-4">
              Your Favorite Food Delivered Hot & Fresh
            </h1>
            <p className="text-md w-96 p-5">
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <button className="bg-orange-400 text-white cursor-pointer rounded-full px-5 py-3 flex items-center gap-3">
              Order Now <FiArrowRight />
            </button>
          </div>
          <div>
            <img src={bg_home_banner} alt="" width={650} />
          </div>
        </div>
      </div>
    </>
  );
}
