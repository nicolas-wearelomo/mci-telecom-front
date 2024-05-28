"use client";
import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { SvgPeople } from "@/utils/svgList";
import { Button } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { setAccessToken } from "@/redux/slices/auth";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    dispatch(setAccessToken(null));
    router.push("/login");
  };

  return (
    <div
      className={`max-h-[75px] min-h-[75px] flex items-center mb-4 justify-between ${
        (pathname === "/login" || pathname === "/login/forgot-password" || pathname === "/login/reset-password") &&
        "hidden"
      }`}
    >
      <Image src="/assets/login/mci-logo.png" alt="logo mci telecom" width={100} height={100} className="ml-5" />
      <div className="mr-5">
        Bienvenido {currentUser?.first_name}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{currentUser?.first_name.slice(0, 1)}</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              width: "252px",
              height: "250px",

              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="min-h-[250px] flex flex-col justify-between py-5">
            <div className="pl-5">
              <div className="text-[12px]">Perfil</div>
              <div className="font-bold">Cliente</div>
            </div>
            <div className="pl-5">
              <div className="text-[12px]">Empresa</div>
              <div className="font-bold">{currentUser?.companyName}</div>
            </div>
            <Link href="/profile" onClick={handleClose} className="pl-5 flex gap-2 text-[12px] cursor-pointer">
              <SvgPeople fill="#24A2CE" /> Ir a mi Perfil
            </Link>
            <Divider />
            <div className="mx-5">
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#8894A4" }}
                onClick={() => {
                  localStorage.setItem("userAuth", "false");
                }}
              >
                <div onClick={handleSignOut}>Cerrar Sesión</div>
              </Button>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
}
