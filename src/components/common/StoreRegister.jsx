import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { storeSchema } from '../../schemas/storeSchema';
import styled from 'styled-components';
import FormField from "../my/modify/FormField.jsx";
import {fields} from "../../constants/common/storeFields.js";

function StoreRegister() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(storeSchema),
    });

    const onSubmit = (data) => {
        console.log('등록된 가게 정보:', data);
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({ label, name, placeholder }) => (
                <FormField
                    key={name}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    value={watch(name) || ''}
                    register={register}
                    setValue={setValue}
                    error={errors[name]?.message}
                />
            ))}
            <SubmitButton type="submit">저장하기</SubmitButton>
        </FormContainer>
    );
}

export default StoreRegister;


const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    padding: 1.5rem;
`;



const SubmitButton = styled.button`
    margin-top: 1rem;
    padding: 0.9rem;
    background-color: #49c48f;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #3ca376;
    }
`;
