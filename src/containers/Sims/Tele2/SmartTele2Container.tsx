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
  }, [data]);

  return (
    <div className="container">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <SmartMovistarFilters title="SIMs Tele2" data={data} setData={setDataToRender} />
          <SmartTable columns={columns} rows={data} />
        </>
      )}
    </div>
  );
};

export default SmartTele2Container;
