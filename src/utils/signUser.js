import axiosInstance from "./axiosInstance";

const signUser = async (userData) => {
  try {
    const { data } = await axiosInstance.post("/login", userData);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data}`;
    return data;
  } catch (error) {
    return { error };
  }
};

export default signUser;
