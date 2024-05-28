"use client";
import * as React from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Alert from "@mui/material/Alert";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  const [mail, setMail] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);
  const [notification, setNotification] = React.useState<boolean>(false);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const loginFunction: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login/forgot-password`, { mail });
      console.log(response, "try");
      setError(false);
      setNotification(true);
    } catch (error) {
      console.log(error, "catch");
      setError(true);
      setNotification(false);
    }
    // if (mailTest !== mail) {
    //   setError(true);
    //   setNotification(false);
    // } else {
    //   setError(false);
    //   setNotification(true);
    // }
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center ">
      <div className="bg-[#8BD4E8] w-[60vw] min-h-[80vh] max-h-[95vh] flex justify-center rounded-[32px]">
        <div className="bg-white m-6 mr-3 w-[50%] rounded-[32px]">
          <img
            src="/assets/login/login.png"
            alt="Imagen de fondo Login"
            className="object-cover w-full h-full rounded-[32px]"
          />
        </div>
        <div className="bg-white m-6 ml-3 w-[50%] rounded-[32px] flex flex-col justify-center items-center gap-12">
          <Image src="/assets/login/mci-logo.png" alt="mci logo" width={150} height={150} />
          <h2 className="text-[25px] font-semibold w-[328px]">¿Has olvidado contraseña?</h2>
          {!notification ? (
            <>
              <div className="max-w-[328px] text-[14px] text-center leading-4 text-[#333333]">
                <p className="mb-5">
                  Para recuperar tu contraseña, ingresa correo electónico asociado a tu cuenta de acceso
                </p>
                <p>Recibirás un email con un enlace para realizar el cambio de contraseña</p>
              </div>
              <form className="flex flex-col gap-3" onSubmit={loginFunction}>
                <TextField
                  sx={{ width: "328px" }}
                  label="Correo Electrónico"
                  id="standard-size-small"
                  variant="outlined"
                  onChange={handleMailChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {error && (
                  <Alert
                    severity="error"
                    sx={{ paddingY: 0, width: "328px", fontSize: "12px" }}
                    className={`${error ? "flex" : "hidden"}`}
                  >
                    Correo electrónico no existe en sistema
                  </Alert>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    height: "56px",
                    backgroundColor: "#0E2E4F",
                    fontWeight: "bold",
                    fontSize: "14px",
                    display: "flex",
                  }}
                >
                  Restaurar Contraseña
                </Button>
              </form>
            </>
          ) : (
            <div>
              <Alert severity="success" sx={{ width: "328px", marginBottom: "10px" }}>
                Enlace enviado con Éxito
              </Alert>
              <div className="max-w-[328px] text-[14px] text-center leading-4 text-[#333333]">
                <p className="mb-5">
                  Hemos enviado un enlace a tu correo electrónico para realizar el cambio de contraseña.
                </p>
              </div>
            </div>
          )}
          <Link href={"/login"} className="text-[#24A2CE] cursor-pointer">
            Ingresar
          </Link>
        </div>
      </div>
    </div>
  );
}
