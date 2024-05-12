import styled from "styled-components";
import Week from "./Week";

const StyledYear = styled.div`
    display: grid;
    grid-template-columns: repeat(52, minmax(8px, 1fr));
    grid-gap: 10px;
    margin: 0px 0px 6px 0px;
`;

const StyledColumn = styled.div<{ show: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    .week-count {
        font-size: 12px;
        margin: 0px 0px 3px 0px;
        visibility: ${props => props.show ? "visible" : "hidden"};
    }
`;

function Year(props: { year: number }) {
    const NUM_WEEKS_IN_YEAR: number = 52;

    return (
        <StyledYear>
            {Array.from({ length: NUM_WEEKS_IN_YEAR }, (_, i) => (
                <StyledColumn show={(i === 0 || (i + 1) % 5 === 0)}>
                    {props.year === 0 && <p id="week-count" className="week-count">{i + 1}</p>}
                    <Week key={i} />
                </StyledColumn>
            ))}
        </StyledYear>
    );
}

export default Year;
