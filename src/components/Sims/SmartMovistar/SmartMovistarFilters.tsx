import CustomTableGrid from "@/components/CustomTableGrid";
import SelectButton from "@/components/SelectButton";
import { SvgDownload, SvgEye } from "@/utils/svgList";
import { Button } from "@mui/material";
import Link from "next/link";

const SmartMovistarFilters = () => {
  const configOptions = [
    { value: "overconsumption", label: "Sobreconsumo", link: "/sims/smart-movistar/overconsumption" },
    { value: "imei", label: "Cambio de IMEI", link: "/sims/smart-movistar/change-imei" },
    // { value: "views", label: "Vista", openModal: () => setOpen(!open) },
    // { value: "notification", label: "Notificaciones", openModal: () => setOpenNotifaction(!openNotifaction) },
  ];

  return (
    <div className="p-5 mr-14">
      <div className="flex justify-between">
        <h4 className="text-[#24A2CE] text-3xl font-bold">SIMs Movistar</h4>
        <div className="flex gap-5 pr-5">
          <Link
            href={"/sims/smart-movistar/consumption"}
            className="border-solid border-2 border-[#24A2CE] px-5 flex justify-center items-center text-[#24A2CE] font-bold gap-2 rounded-[8px]"
          >
            <SvgEye fill="#24A2CE" /> VER CONSUMO
          </Link>
          <Button
            variant="outlined"
            sx={{ borderRadius: "8px", fontWeight: "bold", border: "2px solid #24A2CE", color: "#24A2CE" }}
            startIcon={
              <SvgDownload
                fill="#24A2CE
     "
              />
            }
          >
            DESCARGAR
          </Button>
          <SelectButton label={"CONFIGURAR"} options={configOptions} />
        </div>
      </div>
      <div className="mt-5 w-full">{/* <CustomTableGrid columns={columns} rows={rows} cols={8} /> */}</div>
    </div>
  );
};

export default SmartMovistarFilters;
