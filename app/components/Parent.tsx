"use client";
import React from "react";
import localFont from "next/font/local";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const myFont = localFont({ src: "../../public/Jano.otf" });
const myFontTwo = localFont({ src: "../../public/CF.ttf" });
import {
  faChevronDown,
  faCircleUser,
  faMagnifyingGlass,
  faUserLarge,
  faUserLargeSlash,
} from "@fortawesome/free-solid-svg-icons";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
  );
}

export default Parent;
