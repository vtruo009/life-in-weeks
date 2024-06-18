import styled from "styled-components"
import Year from "./Year";
import Rating from "./Rating";

const StyledCalendar = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    background-color: #F5F5F2;
    padding: 10px;
`;

const StyledCalendarGrid = styled.div`
    :first-child > p {
        align-content: end;
    }
`;

const StyledRow = styled.div<{ $showRowCounter: boolean }>`
    display: grid;
    grid-template-areas: "12px 1fr";
    grid-gap: 5px;
    margin: 0px 5px;

    .age-count {
        text-align: end;
        width: 12px;
        font-size: 12px;
        margin: 0px 3px 6px 0px;
        visibility: ${props => props.$showRowCounter ? "visible" : "hidden"};
    }
`;

function Calendar() {
    const YEARS_IN_LIFE: number = 80;

    return (
        <StyledCalendar>
            <h1>{YEARS_IN_LIFE} Years of My Life</h1>
            <Rating isCompact={false} />
            <StyledCalendarGrid>
                {Array.from({ length: YEARS_IN_LIFE }, (_, i) => (
                    <StyledRow $showRowCounter={i % 5 === 0}>
                        <p id="age-count" className="age-count">{i}</p>
                        <Year key={i} year={i} />
                    </StyledRow>
                ))}
            </StyledCalendarGrid>
        </StyledCalendar>
    );
};

export default Calendar;
