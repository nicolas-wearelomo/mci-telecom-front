"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { ModelSmsSmart } from "@/models/sms/modelSms";

const useGetSmsSmart = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const getSmsSmart = useCallback(
    async ({ sent_by, from, to }: ModelSmsSmart) => {
      if (!isAuth) return;
      setLoading(true);
      try {
        console.log(from, to);
        const response = await axiosInstance.get(`/sms/smart`, {
          params: {
            // sent_by,
            from,
            to,
          },
        });
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
    callback: getSmsSmart,
  };
};

export default useGetSmsSmart;
