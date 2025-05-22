import styled from "styled-components";
import Header from "../../common/header/Header.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useUpdateStore} from "../../../hooks/mutation/useUpdateStore.js";
import ActionButtons from "./ActionButtons.jsx";
import {useGetMainStore} from "../../../hooks/query/useGetMainStore.js";
import {useEffect, useState} from "react";
import DescriptionField from "./DescriptionField.jsx";
import PhoneField from "./PhoneField.jsx";
import NameField from "./NameField.jsx";
import SkeletonInput from "../../common/skeleton/SkeletonInput.jsx";
import SkeletonTextarea from "../../common/skeleton/SkeletonTextarea.jsx";
import ErrorState from "../../loading/ErrorState.jsx";

function StoreModifyScreen() {
    const { storeId } = useParams();
    const navigate = useNavigate();
    const {data: storeData, isPending, isError} = useGetMainStore(storeId);
    const [storeName, setStoreName] = useState('');
    const [storePhone, setStorePhone] = useState('');
    const [storeDescription, setStoreDescription] = useState('');
    const { mutate: updateStore, isLoading } = useUpdateStore();

    useEffect(() => {
        if (storeData) {
            setStoreName(storeData.store_name || '');
            setStorePhone(storeData.store_phone || '');
            setStoreDescription(storeData.store_description || '');
        }
    }, [storeData]);

    if(isPending) {
        return (
            <Container>
                <SkeletonInput />
                <SkeletonInput />
                <SkeletonTextarea />
            </Container>
        )
    }

    if(isError) {
        return <Container>
            <ErrorState />
        </Container>;
    }

    const handleCancel = () => {
        navigate(-1);
    };


    const updatedData = {
        name: storeName,
        phone: storePhone,
        description: storeDescription,
    };


    const handleModify = () => {
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
    }

    return (
        <Container>
            <Header title="가게 정보 수정" />
            <NameField value={storeName} onChange={(e) => setStoreName(e.target.value)} />
            <PhoneField value={storePhone} onChange={(e) => setStorePhone(e.target.value)} />
            <DescriptionField value={storeDescription} onChange={(e) => setStoreDescription(e.target.value)} />
            <ActionButtons onCancel={handleCancel} onSubmit={handleModify} isLoading={isLoading} />
        </Container>
    );
}

export default StoreModifyScreen;


const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
`;

