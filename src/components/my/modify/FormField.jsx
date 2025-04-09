import styled from "styled-components";

function FormField({ label, name, placeholder, value, register, setValue, error }) {
    return (
        <FieldBox>
            <Label htmlFor={name}>{label}</Label>
            <InputWrapper>
                <Input
                    id={name}
                    {...register(name)}
                    value={value}
                    placeholder={placeholder}
                />
                {value && (
                    <ClearButton type="button" onClick={() => setValue(name, '')}>
                        ×
                    </ClearButton>
                )}
            </InputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </FieldBox>
    );
}

export default FormField;

const FieldBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #333;
`;

const InputWrapper = styled.div`
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.9rem 2.5rem 0.9rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    background-color: #fff;
    color: #333;
    outline: none;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #49c48f;
    }
`;

const ClearButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #999;
    cursor: pointer;
`;

const ErrorText = styled.p`
    margin-top: 0.3rem;
    font-size: 0.75rem;
    color: #e74c3c;
`;