"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelLegacySim } from "@/models/sims/modelSims";

const useGetAllLegacySims = ({ company }: ModelLegacySim) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getAllMovistarSims = useCallback(async () => {
    if (!isAuth) return;
    try {
      const response = await axiosInstance.get(`/sims/simsLegacy?company=${company}`);

      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [isAuth]);

  return {
    loading,
    data,
    callback: getAllMovistarSims,
  };
};

export default useGetAllLegacySims;
