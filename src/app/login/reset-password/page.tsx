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
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

export default function Page() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);

  const handleMouseDownPasswordConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
  };

  const resetPasswordFunction: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Las contraseñas no cohinciden");
    } else {
      if (token) {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login/reset-password?token=${token}`, {
            password,
          });
          router.push("/login");
        } catch (error) {
          setError("El token ha caducado");
          console.log(error);
        }
      }
    }
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
        <div className="bg-white m-6 ml-3 w-[50%] rounded-[32px] flex flex-col justify-center items-center gap-8">
          <Image src="/assets/login/mci-logo.png" alt="mci logo" width={150} height={150} className="mb-10" />
          <form className="flex flex-col gap-3" onSubmit={resetPasswordFunction}>
            <FormControl sx={{ width: "328px" }} variant="outlined" onChange={handlePasswordChange}>
              <InputLabel htmlFor="outlined-adornment-password">Nueva Contraseña</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Nueva contraseña"
              />
            </FormControl>
            <FormControl sx={{ width: "328px" }} variant="outlined" onChange={handlePasswordConfirmChange}>
              <InputLabel htmlFor="outlined-adornment-password">Confirmar Contraseña</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPasswordConfirm ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordConfirm}
                      onMouseDown={handleMouseDownPasswordConfirm}
                      edge="end"
                    >
                      {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirmar contraseña"
              />
            </FormControl>
            {error && (
              <Alert
                severity="error"
                sx={{ paddingY: 0, width: "328px", fontSize: "12px" }}
                className={`${error ? "flex" : "hidden"}`}
              >
                {error}
              </Alert>
            )}
            <Button
              variant="contained"
              type="submit"
              sx={{ height: "56px", backgroundColor: "#0E2E4F", fontWeight: "bold", fontSize: "14px", display: "flex" }}
            >
              RESTAURAR
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
