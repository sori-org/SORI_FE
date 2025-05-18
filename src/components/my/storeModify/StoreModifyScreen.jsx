import styled from "styled-components";
import Header from "../../common/header/Header.jsx";
import StoreSection from "./StoreSection.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useStoreModifyFormStore} from "../../../store/useStoreModifyFormStore.js";
import {useUpdateStore} from "../../../hooks/mutation/useUpdateStore.js";

function StoreModifyScreen() {
    const { storeId } = useParams();
    const navigate = useNavigate();
    const { storeName, storePhoneNumber, storeDescription } = useStoreModifyFormStore()

    const { mutate: updateStore, isLoading } = useUpdateStore();

    const handleModify = () => {
        const updatedData = {
            name: storeName,
            phone: storePhoneNumber,
            description: storeDescription,
        };

        updateStore({storeId, updatedData},{
            onSuccess: () => {
                alert("가게 정보가 성공적으로 수정되었습니다.");
                navigate(-1);
            },
            onError: (error) => {
                alert("가게 정보 수정에 실패했습니다: " + (error.message || "알 수 없는 오류"));
            },
        });
    };


    return (
        <Container>
            <Header title="가게 정보 수정" />
            <StoreSection />
            <ButtonSection>
                <CancelButton>취소</CancelButton>
                <ModifyButton onClick={handleModify} disabled={isLoading}>수정 완료</ModifyButton>
            </ButtonSection>
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

const ButtonSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`;

const CancelButton = styled.button`
    width: 45%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 16px;
    background-color: white;
    color: #767676;
    border: 1px solid lightgray;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 45%;
    }

`;

const ModifyButton = styled.button`
    width: 45%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 16px;
    background-color: #49c48f;
    color: white;
    border: none;
    cursor: pointer;
    @media (max-width: 480px) {
        width: 45%;
    }

`;
