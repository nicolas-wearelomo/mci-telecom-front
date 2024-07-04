"use client";
import NewOrderContainer from "@/containers/Orders/NewOrderContainer";
import { RootState } from "@/redux/types";
import useGetInfoPlan from "@/services/orders/useGetInfoPlan";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const { callback, data, loading } = useGetInfoPlan();

  useEffect(() => {
    callback({ company: currentUser?.company });
  }, [currentUser]);
  return <NewOrderContainer />;
};

export default page;
