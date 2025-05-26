import useFormStore from "../store/useFormStore.js";

const useSelectHandler = (key) => {
    const {updateFormData} = useFormStore();

    const handleSelect = (item) => {
        updateFormData({[key]: item});
    };

    return handleSelect;
}

export default useSelectHandler;