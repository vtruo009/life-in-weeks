import styled from "styled-components";
import React from "react";

const StyledSquare = styled.button<{ $color: string }>`
    border: 1px solid black;
    width: 14px;
    height: 14px;
    padding: 0px;
    cursor: pointer;
    background-color: ${({ $color: $color }) => $color};

    &:disabled {
        cursor: default;
    }
`;

interface SquareProps {
    color: string;
    disabled?: boolean;
    OnClick?: () => void;
};

const Square = React.forwardRef<HTMLButtonElement, SquareProps>(({ color, disabled = false, OnClick: handleClick }, ref) => {
    return (
        <StyledSquare $color={color} disabled={disabled} onClick={handleClick} ref={ref} />
    );
});

export default Square;
