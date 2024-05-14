import styled from "styled-components";

const StyledWeek = styled.button<{ $squareColor: string }>`
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
    disabled: boolean;
};

function Square({ color = 'transparent', disabled }: SquareProps) {
    return (
        <StyledWeek $squareColor={color} disabled={disabled} onClick={() => console.log('button is clicked')} />
    );
}

export default Square;
