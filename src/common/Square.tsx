import styled from "styled-components";
import { SQUARE_USAGE } from "../utils/mixins";

const StyledWeek = styled.div<{ squareColor: string }>`
    width: 12px;
    height: 12px;
    border: 1px solid black;
    background-color: ${({ squareColor }) => squareColor};
`;

interface SquareProps {
    color: string;
    usedAs: SQUARE_USAGE;
}

function Square(props: SquareProps) {
    return (
        <StyledWeek squareColor={props.color} />
    );
}

export default Square;
