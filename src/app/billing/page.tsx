import CustomTable from "@/components/CustomTable";
import SelectButton from "@/components/SelectButton";
import { ModelTable } from "@/models/modelTable";
import { SvgArrowRigth } from "@/utils/svgList";
import { Button } from "@mui/material";

export default function Page() {
  const cofiguration = [
    { value: "movistar", label: "SIMs Smart Movistar Globales" },
    { value: "entel", label: "SIMs Smart Movistar Locales" },
    { value: "sims", label: "SIMs Smart Entel" },
    { value: "legacy", label: "Legacy" },
    { value: "tele2", label: "SIMs Smart Tele2" },
  ];
  const mesOption = [
    { value: "enero", label: "Enero" },
    { value: "febrero", label: "Febrero" },
    { value: "marzo", label: "Marzo" },
    { value: "abril", label: "Abril" },
    { value: "mayo", label: "Mayo" },
    { value: "junio", label: "Junio" },
    { value: "julio", label: "Julio" },
    { value: "agosto", label: "Agosto" },
    { value: "septiembre", label: "Septiembre" },
    { value: "octubre", label: "Octubre" },
    { value: "noviembre", label: "Noviembre" },
    { value: "diciembre", label: "Diciembre" },
  ];

  const añoOption = [
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
  ];

  interface HomeTable {
    id: number;
    type: string;
    grupo: string;
    cargo: string;
    exceso: string;
    sms: string;
    voz: string;
    total: string;
  }

  const homeTableData: ModelTable<HomeTable> = {
    columns: [
      { header: "Plan", field: "type" },
      { header: "Grupo de suscripción", field: "grupo" },
      { header: "Cargo fijo mensual", field: "cargo" },
      { header: "Exceso de tráfico", field: "total" },
      { header: "Cargo por SMS", field: "total" },
      { header: "Cargo por voz", field: "total" },
      { header: "Total Neto", field: "total" },
    ],
    rows: [
      {
        id: 1,
        type: "25MB | Local Smart M2M",
        grupo: "GPS_D2358_CL25M",
        cargo: "$1.600",
        exceso: "$0",
        sms: "$0",
        voz: "$0",
        total: "$1.600",
      },
      {
        id: 2,
        type: "25MB | Local Smart M2M",
        grupo: "GPS_D2358_CL25M",
        cargo: "$1.600",
        exceso: "$0",
        sms: "$0",
        voz: "$0",
        total: "$1.600",
      },
      {
        id: 3,
        type: "25MB | Local Smart M2M",
        grupo: "GPS_D2358_CL25M",
        cargo: "$1.600",
        exceso: "$0",
        sms: "$0",
        voz: "$0",
        total: "$1.600",
      },
      {
        id: 4,
        type: "25MB | Local Smart M2M",
        grupo: "GPS_D2358_CL25M",
        cargo: "$1.600",
        exceso: "$0",
        sms: "$0",
        voz: "$0",
        total: "$1.600",
      },
      {
        id: 5,
        type: "25MB | Local Smart M2M",
        grupo: "GPS_D2358_CL25M",
        cargo: "$1.600",
        exceso: "$0",
        sms: "$0",
        voz: "$0",
        total: "$1.600",
      },
    ],
  };

  return (
    <div className="pr-5 overflow-y-auto h-[85vh]">
      <div className="border-solid border-2 border-[#d6d6d6] rounded-[32px] p-5 mb-5">
        <div className="flex gap-5 items-end">
          <h2 className="text-[#24A2CE] text-4xl">Facturación</h2>
          <div className="w-[300px]">
            <SelectButton label={"Seleccionar configuración"} options={cofiguration} color={"secondary"} />
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <div className="w-[250px]">
            <SelectButton label={"Mes"} options={mesOption} color={"secondary"} fullWidth />
          </div>
          <div className="w-[250px]">
            <SelectButton label={"Año"} options={añoOption} color={"secondary"} fullWidth />
          </div>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              fontWeight: "bold",
              border: "2px solid #1454a4",
              color: "#FFFFFF",
              bgcolor: "#1454a4",
            }}
            endIcon={
              <SvgArrowRigth
                fill="#24A2CE
"
              />
            }
          >
            CONSULTAR
          </Button>
        </div>
      </div>
      <div className="border-solid border-2 border-[#d6d6d6] rounded-[32px] p-5">
        <p className="text-[#24A2CE] text-2xl font-bold">Detalle de consumo por plan</p>
        <div className="flex justify-between">
          <div className="p-5">
            <p className="font-bold">Razón Social</p>
            <p className="text-gray-400">Moviimaster S.A</p>
          </div>
          <div className="p-5">
            <p className="font-bold">RUT</p>
            <p className="text-gray-400">96.986.450-9</p>
          </div>
          <div className="p-5">
            <p className="font-bold">Desde</p>
            <p className="text-gray-400">25-12-2023</p>
          </div>
          <div className="p-5">
            <p className="font-bold">Hasta</p>
            <p className="text-gray-400">24-01-2024</p>
          </div>
        </div>
        <div>
          <CustomTable dataTable={homeTableData} />
        </div>
        <div className="border-solid border-t-2 border-[#24A2CE] my-5">
          <div className="flex justify-between mt-2">
            <p>Sub total</p>
            <p>$194.490</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Total descuentos datos</p>
            <p>- $50.600</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Total neto</p>
            <p>$143.890</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>IVA (19%)</p>
            <p>$27.339</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Total</p>
            <p>$171.229</p>
          </div>
        </div>
      </div>
    </div>
  );
}
