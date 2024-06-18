import styled from "styled-components";
import EmptySquare from "./EmptySquare";
import { NUM_WEEKS_IN_YEAR } from "../utils/mixins";

const StyledYear = styled.div`
    display: grid;
    grid-template-columns: repeat(${NUM_WEEKS_IN_YEAR}, minmax(8px, 1fr));
    grid-gap: 10px;
    margin: 0px 0px 6px 0px;
`;

const StyledColumn = styled.div<{ $showColumnCounter: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    .week-count {
        font-size: 12px;
        margin: 0px 0px 3px 0px;
        visibility: ${props => props.$showColumnCounter ? "visible" : "hidden"};
    }
`;

interface YearProps {
    currentYear: number;
    weeksToDisable: number;
};

function Year(props: YearProps) {
    return (
        <StyledYear>
            {Array.from({ length: NUM_WEEKS_IN_YEAR }, (_, i) => (
                <StyledColumn $showColumnCounter={(i === 0 || (i + 1) % 5 === 0)}>
                    {props.currentYear === 0 && <p id="week-count" className="week-count">{i + 1}</p>}
                    <EmptySquare key={i} elapsed={(props.weeksToDisable - i) >= 0} />
                </StyledColumn>
            ))}
        </StyledYear>
    );
}

export default Year;
