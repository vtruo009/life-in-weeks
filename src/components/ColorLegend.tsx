import styled from "styled-components";
import Square from "../common/Square";
import { COLOR_MAP, SQUARE_USAGE, WEEK_RATING } from "../utils/mixins";

const StyledColorKey = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: .67em;
`;

const StyledLabel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;

function ColorLegend() {
    return (
        <StyledColorKey>
            {Array.from(Object.values(WEEK_RATING), (rating, i) => (
                <StyledLabel>
                    <Square key={rating} color={COLOR_MAP[rating]} usedAs={SQUARE_USAGE.LEGEND} />
                    <p>{rating}</p>
                </StyledLabel>
            ))}
        </StyledColorKey>
    );
}

export default ColorLegend;
