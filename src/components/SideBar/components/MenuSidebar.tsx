"use client";
import { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { SvgSims } from "@/utils/svgList";
import { usePathname } from "next/navigation";
import { Tooltip } from "@mui/material";

interface SideBarProps {
  name: string;
  path: string;
}

interface MenuSidebarProps {
  menuName: string;
  links: SideBarProps[];
}

export default function MenuSidebar({ links, menuName }: MenuSidebarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Tooltip title="SIMs" placement="right">
      <div
        ref={containerRef}
        className={`relative mt-7 rounded-full p-3  ${pathname.includes("/sims") && "bg-[#8BD4E8]"}`}
      >
        <button onClick={() => setOpen(!open)}>
          <SvgSims fill={`${pathname === "/sims" ? "#000000" : "#24A2CE"} `} />
        </button>
        {open && (
          <div className="absolute top-0 left-14 z-20 bg-white rounded-[8px] min-w-[200px] py-[6px]">
            {links.map((el) => (
              <div
                key={el.name}
                // className="min-w-[168px] m-auto rounded-[8px] py-[8px] cu]rsor-pointer"
                className="min-w-[168px] hover:bg-[#8BD4E8] m-auto rounded-[8px] py-[8px] cursor-pointer"
              >
                <Link className=" px-5 flex items-center gap-2" href={el.path} onClick={() => setOpen(false)}>
                  <SvgSims fill="#24A2CE" size={20} /> {el.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Tooltip>
  );
}
