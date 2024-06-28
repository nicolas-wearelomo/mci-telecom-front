"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelSimsConsumptions, ModelSimsDetail } from "@/models/sims/modelSims";

const useGetSimsConsumptions = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getSimsConsumptions = useCallback(
    async ({ month, year }: ModelSimsConsumptions) => {
      console.log(month);
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/sims/consumption?month=${month}&year=${year}`);
        console.log(response);
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
    callback: getSimsConsumptions,
  };
};

export default useGetSimsConsumptions;
