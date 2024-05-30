"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";

const useGetTopTenManufactures = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const topTenManufactures = useCallback(async () => {
    if (!isAuth) return;

    setLoading(true);
    try {
      const response = await axiosInstance.get(`/sims/manufactures`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [isAuth]);

  return {
    loading,
    data,
    callback: topTenManufactures,
  };
};

export default useGetTopTenManufactures;
