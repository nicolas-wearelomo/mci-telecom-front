import SmsSmartFilter from "@/components/Sims/Sms/SmsSmart/SmsSmartFilter";
import { Button } from "@mui/material";
import Link from "next/link";

const SmartSmsContainer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="mb-5">Envío de SMS</h3>
        <div>
          <Link
            href={"/sims/new-sms"}
            className="mr-10 border-2 border-solid border-[#0E2E4F] rounded-md bg-[#0E2E4F] text-white py-2 px-5"
          >
            + NUEVO SMS
          </Link>
        </div>
      </div>
      <SmsSmartFilter />
    </div>
  );
};

export default SmartSmsContainer;
