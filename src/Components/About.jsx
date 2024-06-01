import React from "react";
import bg_image_about from "../assets/about-background.png";
import bg_banner_about from "../assets/about-background-image.png";
import { BsPlayBtn } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";
import { BsPlayBtnFill } from "react-icons/bs";
import { BsPlayCircleFill } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="about-container w-full h-auto flex justify-center items-center">
        <div className="img-about w-3/6 flex items-center">
          <div className="left-0 absolute -z-10">
            <img src={bg_image_about} alt="" width={150} />
          </div>
          <div>
            <img src={bg_banner_about} alt="" width={340} />
          </div>
        </div>

        <div className=" w-3/6 relative">
          <p className="text-orange-500 absolute left-0">About</p>
          <div className="flex flex-col gap-7 mt-7">
            <h1 className="text-5xl items-center">
              Food is an important part of a balanced diet
            </h1>
            <p className="items-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              commodi, impedit, quidem reprehenderit quam a quibusdam nam optio,
              nisi dolorem corrupti dolores dolorum molestiae labore nesciunt
              aspernatur obcaecati vitae sunt.
            </p>

            <p>
              orem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              commodi, impedit, quidem reprehenderit
            </p>
            <div className="flex justify-around">
              <button className="bg-orange-400 px-9 py-2 rounded-full text-white">
                Learn More
              </button>
              <div className="flex justify-center items-center gap-3">
                <BsPlayCircleFill className="text-6xl" />
                <p>watch video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
