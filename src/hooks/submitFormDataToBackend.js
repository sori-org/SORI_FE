import axiosInstance from "../apis/axiosInstance.js";

const submitFormDataToBackend = async (formData) => {
    const form = new FormData();

    Object.keys(formData).forEach((key) => {
        const value = formData[key];

        if (key === "userImage") {
            form.append(key, value, value.name);
        } else if (Array.isArray(value)) {
            value.forEach((item) => {
                form.append(key, item);
            });
        } else if (value !== null && value !== undefined) {
            form.append(key, value);
        }
    });
    const response = await axiosInstance.post("/api/content/inputs", form);

    return response.data;
}

export default submitFormDataToBackend;