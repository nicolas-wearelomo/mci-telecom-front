import CustomTableOrder from "@/components/SmartTable";
import SelectButton from "@/components/SelectButton";
import { SvgArrowRigth, SvgDelete, SvgDownload } from "@/utils/svgList";
import { Button, MenuItem, TextField } from "@mui/material";

interface BillingFiltersProps {
  month: string;
  setMonth: (month: string) => void;
  year: string;
  setYear: (year: string) => void;
  setProvider: (provider: string) => void;
  provider: string;
  callback: (params: { month: string; year: string; provider: string }) => void;
}

export default function BillingFilters({
  month,
  setMonth,
  year,
  setYear,
  callback,
  provider,
  setProvider,
}: BillingFiltersProps) {
  const mesOption = [
    { value: "01", label: "Enero" },
    { value: "02", label: "Febrero" },
    { value: "03", label: "Marzo" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Mayo" },
    { value: "06", label: "Junio" },
    { value: "07", label: "Julio" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
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

  const filter = [
    { value: "todos", label: "Mostar todo" },
    { value: "mas80", label: "Consumo < 80%" },
    { value: "entre80100", label: "Consumo entre 80% y 100%" },
    { value: "mas100", label: "Consumo > 100%" },
  ];

  const providerSelect = [
    { value: "Sims Smart Movistar Globales", label: "Sims Smart Movistar Globales" },
    { value: "Sims Smart Movistar Locales", label: "Sims Smart Movistar Locales" },
    { value: "Sims Smart Entel", label: "Sims Smart Entel" },
    { value: "Sims Smart Tele2", label: "Sims Smart Tele2" },
  ];

  return (
    <div>
      <div className="flex justify-between mb-5 pr-5">
        <div className="flex gap-2">
          <TextField select label="Billing" size="small" sx={{ width: "200px" }} defaultValue={provider}>
            {providerSelect.map((el) => (
              <MenuItem value={el.value} key={el.value} onClick={() => setProvider(el.value)}>
                {el.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField select label="Mes" size="small" sx={{ width: "200px" }} defaultValue={month}>
            {mesOption.map((mes) => (
              <MenuItem value={mes.value} key={mes.value} onClick={() => setMonth(mes.value)}>
                {mes.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField select label="Año" size="small" sx={{ width: "200px" }} defaultValue={year}>
            {añoOption.map((año) => (
              <MenuItem value={año.value} key={año.value} onClick={() => setYear(año.value)}>
                {año.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              fontWeight: "bold",
              border: "2px solid #1454a4",
              color: "#FFFFFF",
              bgcolor: "#1454a4",
            }}
            onClick={() => callback({ month, year, provider })}
            endIcon={<SvgArrowRigth fill="#24A2CE" />}
          >
            CONSULTAR
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{ borderRadius: "8px", fontWeight: "bold", border: "2px solid #24A2CE", color: "#24A2CE" }}
            endIcon={<SvgDelete fill="#24A2CE" />}
          >
            BORRAR FILTROS
          </Button>
        </div>
      </div>
    </div>
  );
}
