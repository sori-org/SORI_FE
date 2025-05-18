import axiosInstance from "./axiosInstance.js";

const submitFormDataToBackend = async (formData) => {
    const form = new FormData();

    Object.keys(formData).forEach((key) => {
        const value = formData[key];

        if (key === "userImage" && value instanceof File) {
            form.append(key, value, value.name);
        }
        else if (Array.isArray(value)) {
            if (value.length > 0) {
                value.forEach((item) => {
                    form.append(key, item);
                });
            }
        }
        else if (key !== "userImage" && value !== null && value !== undefined) {
            form.append(key, value);
        }
    });
    const response = await axiosInstance.post("/api/content/inputs", form);

    return response.data;
};

export default submitFormDataToBackend;