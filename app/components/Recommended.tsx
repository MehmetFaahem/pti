"use client";
import {
  faAngleLeft,
  faAngleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import axios from "axios";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

function Recommended() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      )
      .then(function (response: any) {
        setFoods(response.data.Items);
        console.log(foods);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-[-20px]">
      <div className="flex justify-between place-items-center">
        <h1 className={`${inter.className} font-[500] text-[26px]`}>
          Recommended
        </h1>
        <div className="flex place-items-center">
          <button className="text-[#FD6011] mr-[14px] text-[16px]">
            AddMore
          </button>
          <div className="w-[10px] relative flex place-items-center">
            <button className="absolute right-0">
              <FontAwesomeIcon
                className="opacity-20"
                icon={faChevronLeft}
                height={24}
                width={24}
                color="black"
              />
            </button>
            <button className="absolute left-0">
              <FontAwesomeIcon
                color="black"
                icon={faChevronRight}
                height={24}
                width={24}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] mt-[20px]">
        <div className="flex place-items-center overflow-hidden space-x-4">
          {foods
            .splice(5, 7)
            .filter((item: any) => item.IsRecommended == true)
            .map((item: any, index) => (
              <div key={index} className=" flex flex-col justify-items-center">
                <div className="relative w-[200px] h-[280px]">
                  <Image
                    alt=""
                    className="rounded-xl shadow-xl object-cover absolute w-[200px] h-[280px]"
                    src={item.ImageUrl}
                    height={400}
                    width={300}
                  />
                </div>
                <h1
                  className={`${inter.className} mt-[10px] text-[18px] font-[500] place-self-center text-black/60`}
                >
                  {item.Name}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Recommended;
