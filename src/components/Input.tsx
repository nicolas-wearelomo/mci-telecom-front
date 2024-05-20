import { TextField, Tooltip } from "@mui/material";
import { Controller } from "react-hook-form";
import ErrorIcon from "@mui/icons-material/Error";
import { SvgMail } from "@/utils/svgList";

interface CustomProps {
  name: string;
  control: any;
  errors: any;
  label: string;
  maxlength?: number;
  disabled?: boolean;
  icon?: string | null;
  type?: string;
}

export default function Input({
  name,
  control,
  errors,
  label,
  maxlength = 0,
  disabled = false,
  type = "text",
  icon = null,
}: CustomProps) {
  const errorTitle =
    errors[name]?.type === "required"
      ? "El Campo es Requerido"
      : errors[name]?.type === "maxLength"
      ? `El campo debe tener menos de ${maxlength} caracteres`
      : "";

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true, maxLength: maxlength }}
        render={({ field: { onChange, value } }) => (
          <TextField
            type={type}
            label={label}
            sx={{ borderRadius: "15px" }}
            onChange={onChange}
            fullWidth
            disabled={disabled}
            value={value || ""}
            error={Boolean(errors[name])}
            InputProps={{
              endAdornment: icon === "mail" ? <SvgMail /> : null,
              sx: { borderRadius: "15px" },
            }}
          />
        )}
      />
    </div>
  );
}
