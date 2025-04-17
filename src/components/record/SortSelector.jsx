import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function SortSelector({ sortOrder = "desc", onChangeSort }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleSelect = (order) => {
        onChangeSort(order);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <SortButton onClick={handleToggle}>
                {sortOrder === "desc" ? "최신순" : "오래된순"}
            </SortButton>

            {open && (
                <Dropdown>
                    <Option onClick={() => handleSelect("desc")}>최신순</Option>
                    <Option onClick={() => handleSelect("asc")}>오래된순</Option>
                </Dropdown>
            )}
        </Wrapper>
    );
}

export default SortSelector;

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const SortButton = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    color: #666;
    border-bottom: 1px solid #666;
    cursor: pointer;
    padding: 0.1rem;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 120%;
    right: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    z-index: 100;
    min-width: 100px;
    overflow: hidden;
`;

const Option = styled.div`
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    color: #333;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        background-color: #f5f5f5;
    }
`;
