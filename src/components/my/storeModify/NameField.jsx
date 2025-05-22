import {memo, useCallback, useState} from "react";
import LabeledInput from "../../common/label/LabeledInput.jsx";

const NameField = ({ value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = useCallback(() => setIsFocused(true), [])
    const handleBlur = useCallback(() => setIsFocused(false), [])
    const handleClear = useCallback(() => onChange(""), [onChange])

    return (
        <LabeledInput
            label="가게명"
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClear={handleClear}
            isHighlighted={isFocused}
        />
    )
}

export default memo(NameField);