import styled from "styled-components";
import CloseButton from "../../../assets/img_close.svg";

function LabeledInput({label, value, onChange, onClear, isHighlighted, onFocus, onBlur}) {
    return (
        <Wrapper $highlight={isHighlighted}>
            <Label>{label}</Label>
            <InputBox>
                <Input
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    $highlight={isHighlighted}
                />
                {onClear && value && (
                    <ClearButton src={CloseButton} alt="지우기" onClick={onClear}/>
                )}
            </InputBox>
        </Wrapper>
    );
}


export default LabeledInput;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
`;

const Label = styled.span`
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0 0.5rem;
`;

const InputBox = styled.div`
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${({$highlight}) => ($highlight ? "#49C48F" : "#ccc")};
    background-color: ${({$highlight}) => ($highlight ? "#f0f9f5" : "#fff")};
    border-radius: 1rem;
    outline: none;
`;

const ClearButton = styled.img`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;
