import styled from "styled-components";
import CloseButton from "../../../assets/img_close.svg";

function LabeledTextarea({label, value, onChange, onClear, maxLength = 300, isHighlighted, onFocus, onBlur}) {
    return (
        <Wrapper $highlight={isHighlighted}>
            <Label>
                {label}
                <CharCount>{value.length}/{maxLength}</CharCount>
            </Label>
            <TextareaBox>
                <Textarea
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    maxLength={maxLength}
                    $highlight={isHighlighted}
                />
                {onClear && value && (
                    <ClearButton
                        src={CloseButton}
                        alt="지우기"
                        onClick={onClear}
                    />
                )}
            </TextareaBox>
        </Wrapper>
    );
}

export default LabeledTextarea;

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
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CharCount = styled.span`
    font-size: 0.75rem;
    color: #999;
`;

const TextareaBox = styled.div`
    position: relative;
`;

const Textarea = styled.textarea`
    width: 100%;
    min-height: 120px;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${({$highlight}) => ($highlight ? "#49C48F" : "#ccc")};
    background-color: ${({$highlight}) => ($highlight ? "#f0f9f5" : "#fff")};
    border-radius: 1rem;
    outline: none;
    resize: none;
    line-height: 1.4;
`;

const ClearButton = styled.img`
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
`;
