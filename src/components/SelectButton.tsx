"use client";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

interface SelectButtonProps {
  label: string;
  options: OptionsButton[];
  color?: string;
  fullWidth?: boolean;
}

interface OptionsButton {
  value: string;
  label: string;
  link?: string;
  openModal?: () => void;
}

console.log();

export default function SelectButton({ label, options, color, fullWidth }: SelectButtonProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        className={`border-solid border-2 ${
          color === "secondary" ? "border-gray-200" : "border-[#24A2CE]"
        } rounded-[8px] px-5 
        ${color === "secondary" ? "font-normal" : "font-bold"}
         ${color === "secondary" ? "text-black" : "text-[#24A2CE]"} ${
          fullWidth && "w-full"
        } h-full relative z-10 min-w-[175px] py-2`}
        onClick={() => setOpen(!open)}
      >
        {label}
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {open && (
        <div className="absolute top-14 left-0 z-20 bg-[#E7FAFF] rounded-[8px] min-w-[175px] py-[6px]">
          {options.map((el) => (
            <div
              key={el.value}
              className="min-w-[168px] hover:bg-[#8BD4E8] m-auto rounded-[8px] py-[8px] cursor-pointer"
            >
              {el.link ? (
                <Link className=" px-5 " href={el.link}>
                  {el.label}
                </Link>
              ) : el.value === "views" || el.value === "notification" ? (
                <div className=" px-5 " onClick={el.openModal}>
                  {el.label}
                </div>
              ) : (
                <div className=" px-5 ">{el.label}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
