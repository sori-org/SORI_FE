import axiosInstance from "../axiosInstance";

export const getUser = async () => {
    const { data } = await axiosInstance.get("/api/users/me");
    return data;
};
