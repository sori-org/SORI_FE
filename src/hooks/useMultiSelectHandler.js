import useFormStore from "../store/useFormStore";

const useMultiSelectHandler = (key) => {
    const { formData, updateFormData } = useFormStore();

    const handleToggle = (value) => {
        if (value === "__CLEAR__") {
            updateFormData({ [key]: [] });
            return;
        }
        const prev = formData[key] || [];
        const exists = prev.includes(value);
        const next = exists ? prev.filter((v) => v !== value) : [...prev, value];
        updateFormData({ [key]: next });
    };




    return handleToggle;
};

export default useMultiSelectHandler;
