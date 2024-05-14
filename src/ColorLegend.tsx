import styled from "styled-components";
import Week from "./Week";
import { WEEK_RATING } from "./mixins";

const StyledColorKey = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
            {
                Array.from({ length: Object.keys(WEEK_RATING).length }, (_, i) => (
                    <StyledLabel>
                        <Week key={Object.values(WEEK_RATING)[i]} />
                        <p>{Object.values(WEEK_RATING)[i]}</p>
                    </StyledLabel>
                ))
            }
        </StyledColorKey>
    );
}

export default ColorLegend;
