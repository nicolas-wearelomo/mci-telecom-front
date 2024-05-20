"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const useGetAllMovistarSims = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  const getAllMovistarSims = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/news");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    loading,
    data,
    callback: getAllMovistarSims,
  };
};

export default useGetAllMovistarSims;
