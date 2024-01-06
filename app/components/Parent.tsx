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
      <div className="px-[14%] w-full py-[5%]">
        <div className="flex place-items-center flex-row justify-between">
          <h1 className={`${myFont.className} text-[50px] font-extrabold`}>
            pti.
          </h1>
          <div className="flex flex-row space-x-4 items-center w-[60%]">
            <div className="bg-white flex place-items-center space-x-3 w-[70%] px-4 h-[50px] rounded-xl">
              <FontAwesomeIcon
                height={24}
                width={24}
                icon={faMagnifyingGlass}
                style={{ color: "F99F1C" }}
              />
              <input placeholder="Search Audiobook" />
            </div>
            <div className="">
              <FormControl
                sx={{ width: 160, bgcolor: "white" }}
                className="rounded-xl font-semibold h-[50px] pb-2"
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
                        <h1 className={`${myFontTwo.className} font-semibold`}>
                          MENU
                        </h1>
                      );
                    }

                    return selected.join(", ");
                  }}
                  IconComponent={() => (
                    <FontAwesomeIcon
                      height={28}
                      width={28}
                      icon={faChevronDown}
                      style={{
                        color: "F99F1C",
                        paddingRight: "10px",
                        borderRadius: "20px",
                      }}
                    />
                  )}
                  className={`${myFontTwo.className} font-[600]`}
                >
                  {names.map((name) => (
                    <MenuItem
                      className={`${myFontTwo.className} text-[#909AA3] font-semibold`}
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="">
            <FontAwesomeIcon
              height={28}
              width={28}
              icon={faCircleUser}
              style={{ color: "FD6011", height: "40px", width: "40px" }}
            />
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div className="h-[500px] pb-[100px] flex justify-between place-items-center py-[5%] px-[14%] w-full bg-[#f99f1c]">
        <div className="w-full">
          <div className="bg-white flex place-items-center justify-between space-x-3 w-[80%] px-4 h-[60px] rounded-xl">
            <input placeholder="Enter Your Email" className="w-[50%]" />
            <button className="bg-[#FD6011] px-1 rounded-md w-[160px] h-[40px] justify-end space-x-2 flex place-items-center">
              <h1
                className={`${inter.className} font-semibold text-white text-[16px]`}
              >
                Subscribe
              </h1>
              <FontAwesomeIcon
                height={24}
                width={24}
                icon={faArrowRight}
                style={{ color: "white" }}
              />
            </button>
          </div>
          <div className="mt-[17%]">
            <h1 className={`${myFont.className} text-[50px] font-extrabold`}>
              pti<span className="text-[#FD6011]">.</span>
            </h1>
            <div className="flex w-full justify-between place-items-end">
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
        </div>
        <div>
          <Image alt="" src={ImageTwo} height={500} width={500} />
        </div>
      </div>
    </>
  );
}

export default Parent;
