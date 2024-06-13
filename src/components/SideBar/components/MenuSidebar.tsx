"use client";
import { usePathname } from "next/navigation";
import { SvgHome, SvgSims, SvgBilling, SvgReports, SvgRecords, SvgHelp } from "../../../utils/svgList";
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Link from "next/link";
import { Divider } from "@mui/material";

interface SideBarProps {
  name: string;
  path: string;
}

interface MenuSidebarProps {
  menuName: string;
  links: SideBarProps[];
}

export default function MenuSidebar({ links, menuName }: MenuSidebarProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const pathname = usePathname();
  return (
    <div className={`mt-7 rounded-full p-3 ${pathname === "/sims" && "bg-[#8BD4E8]"}`}>
      <button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <SvgSims fill={`${pathname === "/sims" ? "#000000" : "#24A2CE"} `} />
      </button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="right-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "rigth top" : "rigth top",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {/* <Link href={} onClick={handleClose}>Profile</Link> */}
                  <div className="py-2 mx-5 text-[#24A2CE] font-bold">{menuName}</div>
                  <Divider />
                  {links.map((el, index) => (
                    <div key={index} className="z-999">
                      <div className="py-2 mx-5 flex gap-4">
                        <SvgSims fill="#24A2CE" size={25} />
                        <Link href={el.path} onClick={() => setOpen(false)}>
                          {el.name}
                        </Link>
                      </div>
                      <Divider />
                    </div>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
