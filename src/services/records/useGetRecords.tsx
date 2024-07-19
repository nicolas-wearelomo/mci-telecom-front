"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelSimsConsumptions, ModelSimsDetail } from "@/models/sims/modelSims";
import { ModelRecords } from "@/models/records/modelRecords";

const useGetRecords = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getRecords = useCallback(
    async ({ from, to, company, icc }: ModelRecords) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/records/all?from=${from}&to=${to}&company=${company}&icc=${icc}`);
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
    callback: getRecords,
  };
};

export default useGetRecords;
