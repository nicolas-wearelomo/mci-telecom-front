"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "./axiosInstance";
import { clearAccessToken, setCurrentUser } from "@/redux/slices/auth";

export default function PrivateRoute({ children }) {
  const { accessToken, currentUser } = useSelector((state) => state.auth);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const verify = async () => {
      if (!accessToken) {
        router.push("/login");
      }
      try {
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        const user = await axiosInstance.get(`/auth/verify?id=${currentUser?.id}`);
        if (!currentUser) {
          await dispatch(setCurrentUser(user.data));
        }
      } catch (error) {
        dispatch(clearAccessToken());
      }
    };
    verify();
  }, [pathname]);
  return <>{children}</>;
}
