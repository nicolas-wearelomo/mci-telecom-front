"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelSimsDetail } from "@/models/sims/modelSims";

const useGetSimsDetails = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getSimsDetail = useCallback(
    async ({ serial_number, from, to }: ModelSimsDetail) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/sims/detail`, {
          params: {
            serial_number,
            from,
            to,
          },
        });
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
    callback: getSimsDetail,
  };
};

export default useGetSimsDetails;
