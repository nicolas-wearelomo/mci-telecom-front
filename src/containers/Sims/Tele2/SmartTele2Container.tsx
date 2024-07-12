"use client";
import SmartMovistarFilters from "@/components/Sims/SmartMovistar/SmartMovistarFilters";
import SmartMovistarTable from "@/components/Sims/SmartMovistar/SmartMovistartable";
import SmartTable from "@/components/SmartTable";
import useSmartMovistarColumn from "@/components/SmartTable/columns/useSmartMovistarColumns";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SmartTele2Container = () => {
  const [subscriptionGruop, setSubscriptionGruop] = useState([]);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [dataToRender, setDataToRender] = useState([]);
  const { callback, data, loading } = useGetAllMovistarSims({
    company: currentUser?.company,
    service_provider: "Tele2",
  });
  const columns = useSmartMovistarColumn();

  useEffect(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    setDataToRender(data);

    let sub = data
      .map((item: any) => item.commercial_group)
      .filter((value: any, index: any, self: any) => self.indexOf(value) === index);

    setSubscriptionGruop(sub);
  }, [data]);

  return (
    <div className="containerSmart">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <SmartMovistarFilters
            title="SIMs Tele2"
            data={data}
            setData={setDataToRender}
            redirect="smart-tele2"
            sub={subscriptionGruop}
          />
          <SmartTable columns={columns} rows={dataToRender} step1 />
        </>
      )}
    </div>
  );
};

export default SmartTele2Container;
