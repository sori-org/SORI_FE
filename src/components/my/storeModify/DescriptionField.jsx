import {memo, useCallback, useState} from "react";
import LabeledTextarea from "../../common/label/LabeledTextarea.jsx";

const DescriptionField = ({ value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = useCallback(() => setIsFocused(true), [])
    const handleBlur = useCallback(() => setIsFocused(false), [])

    return (
        <LabeledTextarea
            label="가게 설명"
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isHighlighted={isFocused}
        />
    )
}

export default memo(DescriptionField);