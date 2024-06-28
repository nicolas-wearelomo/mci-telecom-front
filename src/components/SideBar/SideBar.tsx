"use client";
import { usePathname } from "next/navigation";
import { SvgHome, SvgSims, SvgBilling, SvgReports, SvgRecords, SvgHelp } from "../../utils/svgList";
import * as React from "react";
import MenuSidebar from "./components/MenuSidebar";

export default function SideBar() {
  const simsMenu = [
    { name: "Smart Movistar", path: "/sims/smart-movistar" },
    { name: "Smart Entel", path: "/sims/smart-entel" },
    { name: "Smart Tele2", path: "/sims/smart-tele2" },
    { name: "Legacy", path: "/sims/legacy" },
  ];

  const pathname = usePathname();
  return (
    <div
      // className={`h-[calc(100vh-180px)] w-[100px] border-solid border-2 border-[#d6d6d6] mx-5 rounded-full flex flex-col items-center  ${
      // className={`h-[85vh] w-[100px] border-solid border-2 border-[#d6d6d6] mx-5 rounded-full flex flex-col items-center min-w-[80´x] ${
      //   (pathname === "/login" || pathname === "/login/forgot-password" || pathname === "/login/reset-password") &&
      //   "hidden"
      // } bg-white`}
      className={`h-[calc(100vh-120px)] w-[100px] border-solid border-[1px] border-[#d6d6d6] mx-5 rounded-full flex flex-col items-center min-w-[80´x] ${
        (pathname === "/login" || pathname === "/login/forgot-password" || pathname === "/login/reset-password") &&
        "hidden"
      } bg-white`}
    >
      <div className={`mt-7 rounded-full p-3 ${pathname === "/home" && "bg-[#8BD4E8]"}`}>
        <SvgHome fill={`${pathname === "/home" ? "#000000" : "#24A2CE"} `} href="/home" />
      </div>
      <MenuSidebar links={simsMenu} menuName="SIMs" />

      <div className={`mt-7 rounded-full p-3 ${pathname === "/billing" && "bg-[#8BD4E8]"}`}>
        <SvgBilling fill={`${pathname === "/billing" ? "#000000" : "#24A2CE"} `} href="/billing" />
      </div>
      <div className={`mt-7 rounded-full p-3 ${pathname === "/reports" && "bg-[#8BD4E8]"}`}>
        <SvgReports fill={`${pathname === "/reports" ? "#000000" : "#24A2CE"} `} href="/reports" />
      </div>
      <div className={`mt-7 rounded-full p-3 ${pathname === "/records" && "bg-[#8BD4E8]"}`}>
        <SvgRecords fill={`${pathname === "/records" ? "#000000" : "#24A2CE"} `} href="/records" />
      </div>
      <div className={`mt-7 rounded-full p-3 ${pathname === "/help" && "bg-[#8BD4E8]"}`}>
        <SvgHelp fill={`${pathname === "/help" ? "#000000" : "#24A2CE"} `} href="/help" />
      </div>
    </div>
  );
}
