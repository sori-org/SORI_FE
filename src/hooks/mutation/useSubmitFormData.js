import { useMutation } from "@tanstack/react-query";
import submitFormDataToBackend from "../../apis/submitFormDataToBackend.js";
import useFormStore from "../../store/useFormStore.js";

export const useSubmitFormData = (options) => {
    const { resetFormData } = useFormStore();

    return useMutation({
        mutationKey: ['submitFormData'],
        mutationFn: submitFormDataToBackend,
        onSuccess: (data, variables, context) => {
            console.log("useSubmitFormData 내부: 폼 제출 성공!", data);
            alert("게시글이 성공적으로 작성되었습니다!");
            resetFormData();
            if (options?.onSuccess) {
                options.onSuccess(data, variables, context);
            }
        },

        onError: (error, variables, context) => {
            console.error("useSubmitFormData 내부: 폼 제출 실패:", error);
            alert("게시글 작성에 실패했습니다: " + (error.message || "알 수 없는 오류"));
            resetFormData();

            if (options?.onError) {
                options.onError(error, variables, context);
            }
        },
    })
}