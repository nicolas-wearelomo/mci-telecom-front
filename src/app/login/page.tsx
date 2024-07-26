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
import { useRouter } from "next/navigation";
import signUser from "../../utils/signUser";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/redux/slices/auth";

export default function Page() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState<string>("");
  const [mail, setMail] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const loginFunction: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setError(false);

    const response = await signUser({ email: mail, password: password });

    if (response?.error) {
      setError(true);
    } else {
      dispatch(setAccessToken(response));
      router.push("/home/business");
    }

    // localStorage.setItem("userAuth", "true");
    // router.push("/home");
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center ">
      <div className="bg-[#8BD4E8] w-[60vw] min-h-[80vh] max-h-[95vh] flex justify-center rounded-[32px]">
        <div className="bg-white m-6 mr-3 w-[50%] rounded-[32px] relative">
          <img
            src="/assets/login/login.png"
            alt="Imagen de fondo Login"
            className="object-cover w-full h-full rounded-[32px] z-20"
          />
          <p className="text-white z-50 absolute top-[100px] left-[70px] text-lg">
            Conectividad celular global para dispositivos IoT
          </p>
        </div>
        <div className="bg-white m-6 ml-3 w-[50%] rounded-[32px] flex flex-col justify-center items-center gap-8">
          <Image src="/assets/login/mci-logo.png" alt="mci logo" width={150} height={150} className="mb-0" />
          {/* <p className="text-[#24A2CE]">Conectividad celular global para dispositivos IoT</p> */}
          {/* <h2 className="text-[25px] font-semibold w-[328px]">Ingresa</h2> */}
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
            <FormControl sx={{ width: "328px" }} variant="outlined" onChange={handlePasswordChange}>
              <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
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
                label="Contraseña"
              />
            </FormControl>
            {error && (
              <Alert
                severity="error"
                sx={{ paddingY: 0, width: "328px", fontSize: "12px" }}
                className={`${error ? "flex" : "hidden"}`}
              >
                Correo electrónico o contraseña incorrecto
              </Alert>
            )}
            <Button
              variant="contained"
              type="submit"
              sx={{ height: "56px", backgroundColor: "#0E2E4F", fontWeight: "bold", fontSize: "14px", display: "flex" }}
            >
              Ingresar
            </Button>
          </form>
          <Link href={"/login/forgot-password"} className="text-[#24A2CE] cursor-pointer">
            ¿Has olvidado tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
}
