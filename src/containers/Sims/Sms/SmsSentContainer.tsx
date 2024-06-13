"use client";
import { Button, TextField } from "@mui/material";
import { usePathname } from "next/navigation";
import SendIcon from "@mui/icons-material/Send";
import { useEffect } from "react";
import useGetHistorySms from "@/services/sms/useGetHistorySms";
import CustomTable from "@/components/CustomTable";
import { ModelTable } from "@/models/modelTable";

const SmsSentContainer = () => {
  const pathName = usePathname();
  const serial_number = pathName.split("/").pop() || null;

  const { callback, data, loading } = useGetHistorySms();

  useEffect(() => {
    if (serial_number) {
      callback();
    }
  }, [callback]);

  console.log(data);

  interface HomeTable {
    id: number;
    type: string;
    total: number;
  }

  const smsTableData: ModelTable<HomeTable> = {
    columns: [
      { header: "Tipo", field: "text_sent" },
      { header: "Enviado el", field: "date" },
      { header: "Enviado por", field: "total" },
    ],
    rows: data,
  };

  return (
    <div>
      <h3>Enviar SMS</h3>
      <p className="text-[#777777]">ICC SIM: {serial_number}</p>
      <div className="grid grid-cols-3 mt-10 gap-10">
        <div className="">
          <h4 className="font-bold mb-5">Mensaje</h4>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            fullWidth
            rows={8}
            placeholder="Escribe un mensaje aquí"
          />
          <Button
            variant="outlined"
            fullWidth
            sx={{
              marginTop: "10px",
              borderRadius: "8px",
              fontWeight: "bold",
              border: "2px solid #1454a4",
              color: "#FFFFFF",
              bgcolor: "#1454a4",
            }}
            endIcon={<SendIcon />}
          >
            ENVIAR SMS
          </Button>
        </div>
        <div className="col-span-2 h-[calc(35vh)] overflow-auto pr-5">
          <p className=" mb-5">
            <span className="font-bold ">Historial de envío: </span>
            <span className="text-[#777777]">(últimos 50 SMS)</span>
          </p>
          <CustomTable dataTable={smsTableData} />
        </div>
      </div>
    </div>
  );
};

export default SmsSentContainer;
