export const downloadImage = async (imageUrl, setDownloaded) => {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `result_image_${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);

        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 5000); // 5초 후 아이콘 복구
    } catch (error) {
        console.error("이미지 다운로드 실패:", error);
        alert("이미지 다운로드에 실패했습니다. CORS 설정 또는 네트워크를 확인해주세요.");
    }
};