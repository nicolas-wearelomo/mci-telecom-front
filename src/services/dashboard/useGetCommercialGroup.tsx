"use client";
import { useCallback, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelDashboardCommercialGroup } from "@/models/dashboard/modelDashboard";

const useGetCommercialGroup = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getCommercialGroup = useCallback(
    async ({ company }: ModelDashboardCommercialGroup) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/dashboard/commercialGroup?company=${company}`);
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
    callback: getCommercialGroup,
  };
};

export default useGetCommercialGroup;
