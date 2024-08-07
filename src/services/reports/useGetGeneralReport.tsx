"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelSimsConsumptions, ModelSimsDetail } from "@/models/sims/modelSims";

const useGetGeneralReports = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getGeneralReports = useCallback(
    async ({ month, year, company }: ModelSimsConsumptions) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/report/generalReport?month=${month}&year=${year}&company=${company}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [isAuth]
  );

  return {
    loading,
    data,
    callback: getGeneralReports,
  };
};

export default useGetGeneralReports;
