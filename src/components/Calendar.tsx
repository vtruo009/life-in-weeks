import styled from "styled-components"
import Year from "./Year";
import Rating from "./Rating";
import Settings from "./SettingsPage/Settings";
import { useSettingsContext } from "../contexts/SettingsContext";
import { NUM_WEEKS_IN_YEAR, MS_IN_A_WEEK } from "../utils/mixins";

const StyledCalendar = styled.div`
    width: fit-content;
    height: auto;
    position: relative;
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

function calculateNumWeeks(dob: Date): number {
    const today = new Date();
    const timeBetweenTwoDates = (today.getTime() - dob.getTime()) / MS_IN_A_WEEK;
    return Math.round(timeBetweenTwoDates);
}

function Calendar() {
    const { dob, desiredAge } = useSettingsContext().state;
    const numWeeks: number = calculateNumWeeks(dob);

    return (
        <StyledCalendar>
            <Settings />
            <h1>{desiredAge} Years of My Life</h1>
            <Rating compact={false} />
            <StyledCalendarGrid>
                {Array.from({ length: desiredAge }, (_, i) => (
                    <StyledRow $showRowCounter={i % 5 === 0}>
                        <p id="age-count" className="age-count">{i}</p>
                        <Year key={i} currentYear={i} weeksToDisable={numWeeks - (i * NUM_WEEKS_IN_YEAR)} />
                    </StyledRow>
                ))}
            </StyledCalendarGrid>
        </StyledCalendar>
    );
}

export default Calendar;
