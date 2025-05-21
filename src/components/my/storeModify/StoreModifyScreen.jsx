import styled from "styled-components";
import Header from "../../common/header/Header.jsx";
import StoreSection from "./StoreSection.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useStoreModifyFormStore} from "../../../store/useStoreModifyFormStore.js";
import {useUpdateStore} from "../../../hooks/mutation/useUpdateStore.js";
import ActionButtons from "./ActionButtons.jsx";
import {useCallback} from "react";

function StoreModifyScreen() {
    const { storeId } = useParams();
    const navigate = useNavigate();

    const { mutate: updateStore, isLoading } = useUpdateStore();
    const storeName = useStoreModifyFormStore((state) => state.storeName);
    const storePhoneNumber = useStoreModifyFormStore((state) => state.storePhoneNumber);
    const storeDescription = useStoreModifyFormStore((state) => state.storeDescription);

    const handleCancel = useCallback(() => {
        navigate(-1)
    }, [navigate])

    const handleModify = useCallback(() => {
        const updatedData = {
            name: storeName,
            phone: storePhoneNumber,
            description: storeDescription,
        }

        updateStore(
            { storeId, updatedData },
            {
                onSuccess: () => {
                    alert("가게 정보가 성공적으로 수정되었습니다.")
                    navigate(-1)
                },
                onError: (error) => {
                    alert("가게 정보 수정에 실패했습니다: " + (error.message || "알 수 없는 오류"))
                },
            },
        )
    }, [ storeId, updateStore, navigate])

    return (
        <Container>
            <Header title="가게 정보 수정" />
            <StoreSection />
            <ActionButtons onCancel={handleCancel} onSubmit={handleModify} isLoading={isLoading} />
        </Container>
    );
}

export default StoreModifyScreen;


const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
`;
