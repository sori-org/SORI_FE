import {useMutation} from "@tanstack/react-query";
import submitFormDataToBackend from "../submitFormDataToBackend.js";
import useFormStore from "../../store/useFormStore.js";

export const useSubmitFormData = () => {
    const {resetFormData} = useFormStore();

    return useMutation({
        mutationKey: ['submitFormData'],
        mutationFn: submitFormDataToBackend,
        onSuccess: (data) => {
            console.log("폼 제출 성공!", data);
            alert("게시글이 성공적으로 작성되었습니다!");
            resetFormData();
        },

        onError: (error) => {
            console.error("폼 제출 실패:", error);
            alert("게시글 작성에 실패했습니다: " + (error.message || "알 수 없는 오류"));
            resetFormData();
        },
    })
}