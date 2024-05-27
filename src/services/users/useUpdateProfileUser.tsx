"use client";
import { useCallback, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { ModelProfileUser } from "@/models/users/modelProfileUser";

const useUpdateProfileUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const updateUserProfile = useCallback(async ({ first_name, last_name, id }: ModelProfileUser) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put(`/users/profile?id=${id}`, { first_name, last_name });
      setData(response.data);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    loading,
    data,
    callback: updateUserProfile,
  };
};

export default useUpdateProfileUser;
