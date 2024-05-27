"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useGetTopTenManufactures = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const topTenManufactures = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/sims/manufactures`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    loading,
    data,
    callback: topTenManufactures,
  };
};

export default useGetTopTenManufactures;
