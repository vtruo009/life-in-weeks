import styled from "styled-components";
import { ArrowContainer, Popover } from 'react-tiny-popover';
import Rating from "../components/Rating";
import React from "react";

const StyledSquare = styled.button<{ $squareColor: string }>`
    border: 1px solid black;
    width: 14px;
    height: 14px;
    padding: 0px;
    cursor: pointer;
    background-color: ${({ $squareColor }) => $squareColor};

    &:disabled {
        cursor: default;
    }
`;

interface SquareProps {
    color?: string;
    disabled?: boolean;
};

function Square({ color = 'transparent', disabled = false }: SquareProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Popover isOpen={isOpen} containerStyle={{ padding: '5px', top: '5px' }} onClickOutside={() => setIsOpen(false)} content={({ childRect, popoverRect }) =>
            <ArrowContainer
                position='top'
                arrowSize={8}
                arrowStyle={{ bottom: '5px' }}
                style={{ width: '100px', display: 'flex' }}
                arrowColor={'lightgray'}
                childRect={childRect}
                popoverRect={popoverRect}
            >
                <Rating compact />
            </ArrowContainer>}>
            <StyledSquare $squareColor={color} disabled={disabled} onClick={() => { setIsOpen(!isOpen); console.log(isOpen) }} />
        </Popover>
    );
}

export default Square;
