import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SvgArrowRigth, SvgDownload } from "@/utils/svgList";
import CustomTable from "@/components/CustomTable";
import { ModelTable } from "@/models/modelTable";
import RecordsContainter from "@/containers/Records/RecordContainer";

export default function Page() {
  interface HomeTable {
    id: number;
    number: number;
    user: string;
    sucess: string;
    date: string;
  }

  const homeTableData: ModelTable<HomeTable> = {
    columns: [
      { header: "Número", field: "number" },
      { header: "Usuario", field: "user" },
      { header: "Suceso", field: "sucess" },
      { header: "Fecha y Hora", field: "date" },
    ],
    rows: [
      {
        id: 1,
        number: 2308363,
        user: "Prueba Lömo (matias@wearelomo.com)",
        sucess: "El usuario ah iniciado sesión",
        date: "18-04-23 16:51hrs",
      },
      {
        id: 2,
        number: 2308363,
        user: "Prueba Lömo (matias@wearelomo.com)",
        sucess: "El usuario ah iniciado sesión",
        date: "18-04-23 16:51hrs",
      },
      {
        id: 3,
        number: 2308363,
        user: "Prueba Lömo (matias@wearelomo.com)",
        sucess: "El usuario ah iniciado sesión",
        date: "18-04-23 16:51hrs",
      },
      {
        id: 4,
        number: 2308363,
        user: "Prueba Lömo (matias@wearelomo.com)",
        sucess: "El usuario ah iniciado sesión",
        date: "18-04-23 16:51hrs",
      },
      {
        id: 5,
        number: 2308363,
        user: "Prueba Lömo (matias@wearelomo.com)",
        sucess: "El usuario ah iniciado sesión",
        date: "18-04-23 16:51hrs",
      },
      {
        id: 6,
        number: 2308363,
        user: "Prueba Lömo (matias@wearelomo.com)",
        sucess: "El usuario ah iniciado sesión",
        date: "18-04-23 16:51hrs",
      },
      {
        id: 7,
        number: 2308363,
        user: "Prueba Lömo (matias@wearelomo.com)",
        sucess: "El usuario ah iniciado sesión",
        date: "18-04-23 16:51hrs",
      },
    ],
  };

  return (
    <RecordsContainter />
    //     <div className="pr-5 overflow-y-auto h-[85vh] border-solid border-2 border-[#d6d6d6] rounded-[32px] p-5 mr-5">
    //       <h3 className="text-[#24A2CE] text-3xl">Registros del sistema</h3>
    //       <div className="flex justify-between mt-10">
    //         <div className="flex gap-5 ">
    //           <div className="w-[350px]">
    //             <TextField
    //               label="Buscar por número de ICC o alias"
    //               fullWidth
    //               InputProps={{ endAdornment: <SearchIcon /> }}
    //             />
    //           </div>
    //           <Button
    //             variant="outlined"
    //             sx={{
    //               borderRadius: "8px",
    //               fontWeight: "bold",
    //               border: "2px solid #1454a4",
    //               color: "#FFFFFF",
    //               bgcolor: "#1454a4",
    //             }}
    //             endIcon={
    //               <SvgArrowRigth
    //                 fill="#24A2CE
    // "
    //               />
    //             }
    //           >
    //             CONSULTAR
    //           </Button>
    //         </div>
    //         <div>
    //           <Button
    //             variant="outlined"
    //             sx={{
    //               borderRadius: "8px",
    //               fontWeight: "bold",
    //               border: "2px solid #24A2CE",
    //               color: "#24A2CE",
    //               height: "100%",
    //             }}
    //             startIcon={
    //               <SvgDownload
    //                 fill="#24A2CE
    // "
    //               />
    //             }
    //           >
    //             DESCARGAR REGISTROS
    //           </Button>
    //         </div>
    //       </div>
    //       <div className="mt-5 mb-10">
    //         <CustomTable dataTable={homeTableData} />
    //       </div>
    //     </div>
  );
}
