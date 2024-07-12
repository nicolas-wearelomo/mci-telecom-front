"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelSimsConsumptions, ModelSimsDetail } from "@/models/sims/modelSims";

const useGetBillings = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getBilling = useCallback(
    async ({ month, year, company }: ModelSimsConsumptions) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/billing/getByCompany?month=${month}&year=${year}&company=${company}`
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
    callback: getBilling,
  };
};

export default useGetBillings;
