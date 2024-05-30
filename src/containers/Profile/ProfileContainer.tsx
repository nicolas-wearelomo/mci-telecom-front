"use client";
import ProfileForm from "@/components/Profile/ProfileForm";
import ProfileImage from "@/components/Profile/ProfileImage";
import { RootState } from "@/redux/types";
import useUpdateProfileUser from "@/services/users/useUpdateProfileUser";
import { useSelector } from "react-redux";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect } from "react";

const ProfileContainer = () => {
  const { loading, data, callback } = useUpdateProfileUser();
  const { currentUser } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const response = async () => {
      const res = await axiosInstance.get("/sims/manufactures");
    };
    response();
  }, []);
  return (
    <div className="grid grid-cols-2 h-[calc(100vh-180px)] gap-5 mr-5">
      <ProfileForm loading={loading} data={data} callback={callback} currentUser={currentUser} />
      <ProfileImage />
    </div>
  );
};

export default ProfileContainer;
