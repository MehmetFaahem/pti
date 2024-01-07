"use client";
import React from "react";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const myFont = localFont({ src: "../../public/Jano.otf" });
const myFontTwo = localFont({ src: "../../public/CF.ttf" });
import ImageTwo from "../../public/Image2.png";

import {
  faArrowRight,
  faChevronDown,
  faCircleUser,
  faMagnifyingGlass,
  faUserLarge,
  faUserLargeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Quicksand } from "next/font/google";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";
import {
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const names = [
  "Home",
  "Details",
  "Category",
  "My Favorites",
  "Profile",
  "Login/Sign Up",
];

function Parent({ children }: any) {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <div className="mobile:px-[3%] relative laptop:px-[14%] w-full mobile:py-[2%] laptop:py-[5%]">
        <div className="flex w-[100%] place-items-center flex-row justify-between">
          <h1
            className={`${myFont.className} mobile:pr-[10%] laptop:pr-0 mobile:text-[30px] laptop:text-[50px] font-extrabold`}
          >
            pti.
          </h1>
          <div className=" flex flex-row mobile:space-x-1 w-[auto] laptop:space-x-4 ">
            <div className="bg-white laptop:flex mobile:hidden laptop:w-[500px] mobile:w-auto flex place-items-center space-x-3 px-4 mobile:h-[30px] laptop:h-[50px] rounded-md">
              <FontAwesomeIcon
                height={22}
                width={22}
                icon={faMagnifyingGlass}
                style={{ color: "#FE8A75", height: "14", width: "14" }}
                color="#FE8A75"
              />

              <input
                className="laptop:text-[20px] w-[90%] mobile:text-[10px] font-semibold"
                placeholder="Search Audiobook"
              />
            </div>
            <div className="bg-white laptop:hidden mobile:flex laptop:w-[450px] mobile:w-auto flex place-items-center space-x-3 px-4 mobile:h-[30px] laptop:h-[50px] rounded-md">
              <FontAwesomeIcon
                height={22}
                width={22}
                icon={faMagnifyingGlass}
                style={{ color: "#FED2CA", height: "14", width: "14" }}
                color="#FED2CA"
              />
              <input
                className="laptop:text-[20px] w-[90%] mobile:text-[10px] font-semibold"
                placeholder="Search Audiobook"
              />
            </div>
            <div className="flex place-items-end justify-end">
              <FormControl
                sx={{ bgcolor: "white" }}
                className="rounded-md flex px-6 justify-center content-center items-center laptop:w-full mobile:w-[90%] font-semibold mobile:h-[30px] laptop:h-[50px]"
              >
                <Select
                  value={personName}
                  onChange={handleChange}
                  displayEmpty
                  input={<OutlinedInput />}
                  inputProps={{ "aria-label": "Without label" }}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <h1
                          className={`${myFontTwo.className} text-[#00122A] laptop:text-[14px] mobile:text-[10px] mobile:font-medium laptop:font-semibold`}
                        >
                          MENU
                        </h1>
                      );
                    }

                    return selected.join(", ");
                  }}
                  IconComponent={() => (
                    <>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{
                          color: "#FE8A75",
                          height: "14",
                          width: "14",
                        }}
                        className="laptop:flex mobile:hidden"
                        height={16}
                        width={16}
                      />
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{
                          color: "#FED2CA",
                          height: "14",
                          width: "14",
                        }}
                        className="laptop:hidden mobile:flex"
                        height={16}
                        width={16}
                      />
                    </>
                  )}
                  className={`${myFontTwo.className} font-[600]`}
                >
                  {names.map((name) => (
                    <MenuItem
                      className={`${myFontTwo.className} text-[#909AA3]  font-light`}
                      key={name}
                      value={name}
                    >
                      <h1 className="hover:text-[#FD6011] laptop:text-[14px] mobile:text-[10px]">
                        {name}
                      </h1>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="laptop:flex mobile:hidden">
            <FontAwesomeIcon
              height={28}
              width={28}
              icon={faCircleUser}
              style={{ color: "#FD6011", height: "40px", width: "40px" }}
            />
          </div>
        </div>
        <div className="mobile:shadow-sm laptop:shadow-none laptop:hidden absolute w-full left-0 top-[4.6%] h-[1px] bg-slate-600/20" />
        <div>{children}</div>
      </div>
      <div className="mobile:h-[470px] laptop:h-[500px] pb-[100px] flex justify-between place-content-center place-items-center py-[5%] px-[14%] w-full bg-[#f99f1c]">
        <div className="flex laptop:place-items-start mobile:place-items-center flex-col w-full">
          <div className="bg-white laptop:mt-[0px] mobile:mt-[40px] flex place-items-center justify-between space-x-3 mobile:w-[115%] laptop:w-[80%] px-4 h-[60px] rounded-xl">
            <input
              placeholder="Enter Your Email"
              className="mobile:w-[110%] laptop:text-[20px] mobile:text-[14px] laptop:w-[50%]"
            />
            <button className="laptop:bg-[#FD6011] mobile:bg-none px-1 rounded-md w-[160px] h-[40px] justify-end space-x-2 flex place-items-center">
              <h1
                className={`${inter.className} font-semibold mobile:text-[#FD6011] laptop:text-white text-[16px]`}
              >
                Subscribe
              </h1>
              <FontAwesomeIcon
                className="laptop:block mobile:hidden"
                height={24}
                width={24}
                color="white"
                icon={faArrowRight}
              />
              <FontAwesomeIcon
                className="mobile:block laptop:hidden"
                height={24}
                width={24}
                color="#FD6011"
                icon={faArrowRight}
              />
            </button>
          </div>
          <div className="laptop:block mobile:hidden mt-[17%]">
            <h1 className={`${myFont.className} text-[50px] font-extrabold`}>
              pti<span className="text-[#FD6011]">.</span>
            </h1>
            <div className="flex w-[130%] justify-between place-items-end">
              <h2
                className={`${inter.className} mt-[12px] font-bold text-[18px]`}
              >
                Copyright©Tripp.All Right Reserved
              </h2>
              <div className="space-x-2">
                <button className="bg-[#FEDDBA] h-[60px] w-[60px] rounded-full">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    color="#FD6011"
                    width={54}
                    height={54}
                  />
                </button>
                <button className="bg-[#FEDDBA] h-[60px] w-[60px] rounded-full">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    color="#FD6011"
                    width={54}
                    height={54}
                  />
                </button>
                <button className="bg-[#FEDDBA] h-[60px] w-[60px] rounded-full">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="#FD6011"
                    width={54}
                    height={54}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="laptop:hidden place-items-center flex-col mobile:flex mt-[24%]">
            <div className="space-x-2 place-items-center flex">
              <button className="bg-[#FC6011] h-[60px] w-[60px] rounded-full">
                <FontAwesomeIcon
                  icon={faGoogle}
                  color="white"
                  width={54}
                  height={54}
                />
              </button>
              <button className="bg-[#FC6011] h-[60px] w-[60px] rounded-full">
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="white"
                  width={54}
                  height={54}
                />
              </button>
              <button className="bg-[#FC6011] h-[60px] w-[60px] rounded-full">
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="white"
                  width={54}
                  height={54}
                />
              </button>
            </div>
            <h1
              className={`${myFont.className} mt-10 text-center text-[50px] font-extrabold`}
            >
              pti<span className="text-[#FD6011]">.</span>
            </h1>
            <h2
              className={`${inter.className} mt-[14px] text-center font-bold text-[12px]`}
            >
              Copyright©Tripp.All Right Reserved
            </h2>
          </div>
        </div>
        <div className="mobile:hidden laptop:flex">
          <Image alt="" src={ImageTwo} height={500} width={500} />
        </div>
      </div>
    </>
  );
}

export default Parent;
