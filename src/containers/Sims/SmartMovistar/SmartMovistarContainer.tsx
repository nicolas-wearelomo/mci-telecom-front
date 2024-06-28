"use client";
import SmartMovistarFilters from "@/components/Sims/SmartMovistar/SmartMovistarFilters";
import SmartMovistarTable from "@/components/Sims/SmartMovistar/SmartMovistartable";
import SmartTable from "@/components/SmartTable";
import useSmartMovistarColumn from "@/components/SmartTable/columns/useSmartMovistarColumns";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SmartMovistarContainer = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [dataToRender, setDataToRender] = useState([]);
  const { callback, data, loading } = useGetAllMovistarSims({
    company: currentUser?.company,
    service_provider: "Movistar",
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
      <div className="mr-20">
        <SmartMovistarFilters title="SIMs Movistar" data={data} setData={setDataToRender} />
      </div>
      <SmartTable columns={columns} rows={dataToRender} />
      {/* <div className="">
        <SmartTable columns={columns} rows={dataToRender} />
      </div> */}
    </div>
  );
};

export default SmartMovistarContainer;
