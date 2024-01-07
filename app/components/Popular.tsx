"use client";
import {
  faAngleLeft,
  faAngleRight,
  faCamera,
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

function Popular() {
  const [foods, setFoods] = useState<any>([]);
  const [rightrend, setRightrend] = useState(5);
  const [leftrend, setLeftrend] = useState(0);
  const [show, setShow] = useState(false);

  const [details, setDetails] = useState<any>({
    Name: "",
    Price: 0,
    ImageUrl: "",
  });

  useEffect(() => {
    axios
      .get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      )
      .then(function (response: any) {
        setFoods(
          response.data.Items.filter(
            (item: any) => item.IsPopular == true
          ).splice(leftrend, rightrend)
        );
        console.log(response.data.Items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [rightrend, leftrend]);
  return (
    <div className="mobile:pt-[60px] laptop:pt-[120px]">
      <div
        className={`${
          show ? "flex" : "hidden"
        } relative top-0 bottom-0 left-0 right-0 w-full h-full bg-black/50`}
      >
        <div className="fixed shadow-2xl p-10 z-[1000] top-[25%] left-[25%] h-[50%] w-[50%] bg-[#f99f1c] rounded-xl">
          <div className=" flex space-x-2 ">
            <input
              placeholder="Name"
              onChange={(e) => setDetails({ ...details, Name: e.target.value })}
              className="w-[50%] text-[20px] h-[20%] bg-white p-4 rounded-md"
            />
            <input
              placeholder="Price"
              onChange={(e) =>
                setDetails({ ...details, Price: parseInt(e.target.value) })
              }
              type="number"
              min={0}
              className="w-[50%] text-[20px] h-[20%] bg-white p-4 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="text-white cursor-pointer flex bg-[#FD6011] p-3 space-x-2 place-items-center rounded-lg mt-4 "
            >
              <FontAwesomeIcon
                icon={faCamera}
                height="30px"
                width="30px"
                color="white"
              />
              <h1>Upload Image</h1>
            </label>
            <input
              onChange={(e: any) => {
                const file = e.target.files[0];

                if (file) {
                  const reader = new FileReader();

                  reader.onload = async function (event: any) {
                    const res = event.target.result;
                    const stringed = await String(res);
                    console.log(stringed);
                    setDetails({ ...details, ImageUrl: stringed });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              type="file"
              id="image"
              name="image"
              required
              hidden
            />
          </div>
          <div className="flex mt-[60px] space-x-2 place-content-end items-end self-end place-items-center">
            <button
              onClick={() => setShow(false)}
              className="text-white text-center cursor-pointer flex bg-[red] p-3 space-x-2 place-items-center rounded-lg mt-4 "
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                if (
                  details.Name.length !== 0 &&
                  details.Price !== 0 &&
                  details.ImageUrl.length !== 0
                ) {
                  await foods.unshift(details);
                  console.log(foods);
                  setShow(false);
                } else {
                  window.alert(
                    "Please Provide The Requirements To Add A Product. And the Price could not be 0"
                  );
                }
              }}
              className="text-white text-center cursor-pointer flex bg-[#FD6011] p-3 space-x-2 place-items-center rounded-lg mt-4 "
            >
              Add Popular
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between place-items-center">
        <h1
          className={`${inter.className} text-[#00122A] font-[500] laptop:font-light mobile:font-[600] mobile:text-[16px] laptop:text-[26px]`}
        >
          Popular
        </h1>
        <div className="flex place-items-center">
          <button
            onClick={() => setShow(true)}
            className="text-[#FD6011] laptop:flex mobile:hidden mr-[14px] text-[16px]"
          >
            AddMore
          </button>
          <div className="w-[10px] mobile:px-2 laptop:px-0 relative flex place-items-center">
            <button
              className="absolute laptop:flex mobile:hidden right-0"
              onClick={() => {
                leftrend !== 0 ? setRightrend(rightrend - 1) : null;
                leftrend !== 0 ? setLeftrend(leftrend - 1) : null;
              }}
            >
              <FontAwesomeIcon
                className={leftrend > 0 ? "opacity-100" : "opacity-20"}
                icon={faChevronLeft}
                height={24}
                width={24}
                color="black"
              />
            </button>
            <button
              className="absolute left-0"
              onClick={() => {
                rightrend < 8 ? setRightrend(rightrend + 1) : null;
                rightrend < 8 ? setLeftrend(leftrend + 1) : null;
              }}
            >
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
        <div className="flex place-items-center mobile:overflow-auto laptop:overflow-hidden space-x-4">
          {foods.map((item: any, index: any) => (
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

export default Popular;
