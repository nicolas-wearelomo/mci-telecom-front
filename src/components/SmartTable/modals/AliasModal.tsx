import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { Button } from "@mui/material";
import axiosInstance from "@/utils/axiosInstance";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 280,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 2,
};

export default function AliasModal({ open, setOpen, data }: { open: boolean; setOpen: any; data: any }) {
  const handleClose = () => setOpen(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const submitForm = async (values: any) => {
    // const response = await axiosInstance.get(`/sims/manufactures`);
    const response = await axiosInstance.put(`/sims/updateAlias?id=${data.id}`, values);
  };

  React.useEffect(() => {
    if (data) {
      reset({
        alias_sim: data.alias_sim,
      });
    }
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(submitForm)} action="">
            <div className="text-[#24A2CE] font-bold">Alias para ICC</div>
            <div className="text-[#777777] ">
              ICC SIM: <span>{data.serial_number}</span>
            </div>
            <div className="my-10">
              <Input control={control} name="alias_sim" label="Ingresar alias" errors={errors} />
            </div>
            <Button
              variant="contained"
              sx={{ height: "56px", borderRadius: "15px", bgcolor: "#1152A1" }}
              fullWidth
              type="submit"
            >
              GUARDAR
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
