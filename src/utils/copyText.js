export const copyText = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        alert("복사했어요!");
    } catch {
        alert("복사 실패!");
    }
};