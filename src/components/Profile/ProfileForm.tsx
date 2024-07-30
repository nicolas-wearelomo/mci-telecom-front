"use client";
import Input from "@/components/Input";
import { ModelProfileForm, ModelProfileFormProps } from "@/models/users/modelProfileUser";
import axiosInstance from "@/utils/axiosInstance";
import { Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const ProfileForm = ({ loading, callback, currentUser }: ModelProfileFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ModelProfileForm>();

  useEffect(() => {
    if (currentUser) {
      reset({
        id: currentUser.id,
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        companyName: currentUser.companyName,
        email: currentUser.email,
      });
    }
  }, [currentUser]);

  const handleSubmitFunction = async (values: any) => {
    callback({
      id: currentUser.id,
      first_name: values.first_name,
      last_name: values.last_name,
    });
  };

  return (
    <form
      className="rounded-[32px] flex flex-col px-5 justify-between overflow-y-auto h-[85vh]"
      onSubmit={handleSubmit(handleSubmitFunction)}
    >
      {currentUser && !loading ? (
        <>
          <h2 className="text-[#24A2CE] font-bold ">Mi Perfil</h2>
          <h4 className="">Información cuenta</h4>
          <div className="grid grid-cols-2 gap-4 ">
            <Input control={control} errors={errors} name="first_name" label="Nombre de usuario" />
            <Input control={control} errors={errors} name="last_name" label="Apellido de usuario" />
          </div>
          <div className="">
            {/* <Input control={control} errors={errors} name="profileName" label="Nombre de perfil" /> */}
            <Input control={control} errors={errors} name="companyName" label="Nombre de empresa" disabled />
          </div>
          <div className="">
            <Input control={control} errors={errors} name="email" label="Correo electrónico" disabled icon="mail" />
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <Button variant="outlined" sx={{ height: "56px", borderRadius: "15px" }}>
              NO GUARDAR
            </Button>
            <Button variant="contained" sx={{ height: "56px", borderRadius: "15px", bgcolor: "#1152A1" }} type="submit">
              GUARDAR CAMBIOS
            </Button>
          </div>
          <h4 className="">Seguridad</h4>
          <div className="">
            <Input
              control={control}
              errors={errors}
              name="previusPassword"
              label="Contraseña Antigua"
              type="password"
            />
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
              NO GUARDAR
            </Button>
            <Button variant="contained" sx={{ height: "56px", borderRadius: "15px", bgcolor: "#1152A1" }} disabled>
              GUARDAR CAMBIOS
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </form>
  );
};

export default ProfileForm;
