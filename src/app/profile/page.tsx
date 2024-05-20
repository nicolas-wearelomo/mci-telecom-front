"use client";
import Input from "@/components/Input";
import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export default function Page() {
  interface ProfileForm {
    title: string;
    titleEng: string;
    author: string;
    authorEng: string;
    category: string;
    content: string;
    contentEng: string;
    blogId: any;
    id: string;
    headerImage?: string;
    uploadDataInBrowser: void;
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
    setValue,
  } = useForm<ProfileForm>();

  return (
    <div className="grid grid-cols-2 h-[calc(100vh-180px)] gap-5 mr-5">
      <div className="rounded-[32px] flex flex-col px-5 justify-between overflow-y-auto h-[85vh]">
        <h2 className="text-[#24A2CE] font-bold ">Mi Perfil</h2>
        <h4 className="">Información cuenta</h4>
        <div className="grid grid-cols-2 gap-4 ">
          <Input control={control} errors={errors} name="userName" label="Nombre de usuario" />
          <Input control={control} errors={errors} name="surName" label="Apellido de usuario" />
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <Input control={control} errors={errors} name="profileName" label="Nombre de perfil" />
          <Input control={control} errors={errors} name="companyName" label="Nombre de empresa" disabled />
        </div>
        <div className="">
          <Input control={control} errors={errors} name="mail" label="Correo electrónico" disabled icon="mail" />
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <Button variant="outlined" sx={{ height: "56px", borderRadius: "15px" }}>
            NO GURADAR
          </Button>
          <Button variant="contained" sx={{ height: "56px", borderRadius: "15px", bgcolor: "#1152A1" }}>
            GUARDAR CAMBIOS
          </Button>
        </div>
        <h4 className="">Seguridad</h4>
        <div className="">
          <Input control={control} errors={errors} name="previusPassword" label="Contraseña Antigua" type="password" />
        </div>
        <div className="">
          <Input control={control} errors={errors} name="newPassword" label="Nueva contraseña" type="password" />
        </div>
        <div className="">
          <Input
            control={control}
            errors={errors}
            name="repeaNewPassword"
            label="Repetir nueva contraseña"
            type="password"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <Button variant="outlined" sx={{ height: "56px", borderRadius: "15px" }}>
            NO GURADAR
          </Button>
          <Button variant="contained" sx={{ height: "56px", borderRadius: "15px", bgcolor: "#1152A1" }}>
            GUARDAR CAMBIOS
          </Button>
        </div>
      </div>
      <div className="bg-white w-[100%] h-[85vh] rounded-[32px]">
        <img
          src="/assets/login/login.png"
          alt="Imagen de fondo Login"
          className="object-contain w-full h-[85vh] rounded-[32px]"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
