import styled from "styled-components"
import Week from "./Week"

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

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(52, minmax(8px, 1fr));
    grid-gap: 12px;
`;

function Calendar() {
    const LIFE: number = 4056

    return (
        <StyledCalendar>
            <h1>{Math.ceil(LIFE / 52)} Years of My Life</h1>
            <StyledGrid>
                {Array(LIFE).fill(<Week />)}
            </StyledGrid>
        </StyledCalendar>
    );
}

export default Calendar;
