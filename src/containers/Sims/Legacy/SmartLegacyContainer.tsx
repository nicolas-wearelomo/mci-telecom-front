"use client";
import SmartMovistarFilters from "@/components/Sims/SmartMovistar/SmartMovistarFilters";
import SmartMovistarTable from "@/components/Sims/SmartMovistar/SmartMovistartable";
import SmartTable from "@/components/SmartTable";
import useSmartMovistarColumn from "@/components/SmartTable/columns/useSmartMovistarColumns";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import useGetAllLegacySims from "@/services/sims/useGetAllLegacySims";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SmartLegacyContainer = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { callback, data, loading } = useGetAllLegacySims({
    company: currentUser?.company,
  });
  const columns = useSmartMovistarColumn();

  useEffect(() => {
    callback();
  }, [callback]);

  return (
    <div className="pr-5">
      <SmartMovistarFilters title="SIMs Movistar" />
      <div className="">
        <SmartTable columns={columns} rows={data} />
      </div>
    </div>
  );
};

export default SmartLegacyContainer;
