"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelSimsConsumptions, ModelSimsDetail } from "@/models/sims/modelSims";
import { ModelOrders } from "@/models/orders/modelOrders";

const useGetInfoPlan = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getSimsConsumptions = useCallback(
    async ({ company }: ModelOrders) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/orders/getInfoPlan?company=${company}`);

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

export default useGetInfoPlan;
