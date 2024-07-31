"use client";
import { useCallback, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelDashboardCommercialGroup } from "@/models/dashboard/modelDashboard";

const useGetOperationDashboard = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getOperationDashboard = useCallback(
    async ({ company }: ModelDashboardCommercialGroup) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/dashboard/operation?company=${company}`);
        // const billingsRespose = await axiosInstance.get(`/billing/getByCompany?company=${company}`);
        // console.log(billingsRespose);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [isAuth]
  );

  return {
    loading,
    data,
    callback: getOperationDashboard,
  };
};

export default useGetOperationDashboard;
