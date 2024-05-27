import { ModelTable } from "@/models/modelTable";
import CustomTable from "../CustomTable";

const HomeTable = () => {
  interface HomeTable {
    id: number;
    type: string;
    total: number;
  }

  const homeTableData: ModelTable<HomeTable> = {
    columns: [
      { header: "Tipo", field: "type" },
      { header: "Total", field: "total" },
    ],
    rows: [
      { id: 1, type: "Tráfico", total: 0 },
      { id: 2, type: "Cambio de IMEI", total: 0 },
    ],
  };
  return <CustomTable dataTable={homeTableData} />;
};

export default HomeTable;
