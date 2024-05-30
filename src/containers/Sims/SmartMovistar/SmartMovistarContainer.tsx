"use client";
import SmartMovistarFilters from "@/components/Sims/SmartMovistar/SmartMovistarFilters";
import SmartMovistarTable from "@/components/Sims/SmartMovistar/SmartMovistartable";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SmartMovistarContainer = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { callback, data, loading } = useGetAllMovistarSims({
    company: currentUser.company,
    service_provider: "Movistar",
  });

  useEffect(() => {
    callback();
  }, [callback]);

  console.log(data);
  return (
    <div>
      <SmartMovistarFilters />
      <SmartMovistarTable />
    </div>
  );
};

export default SmartMovistarContainer;
