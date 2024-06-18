import React from "react";
import styled from "styled-components"
import Year from "./Year";
import Rating from "./Rating";
import Settings from "./SettingsPage/Settings";
import SettingsContext from "../contexts/SettingsContext";
import { WEEK } from "../utils/mixins";

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
    const timeBetweenTwoDates = (today.getTime() - dob.getTime()) / WEEK;
    return Math.round(timeBetweenTwoDates) + 52 - 1;
}

function Calendar() {
    const settings = React.useContext(SettingsContext);
    var numWeeks: number = calculateNumWeeks(settings.dob);

    return (
        <StyledCalendar>
            <Settings />
            <h1>{settings.lifeExpectancy} Years of My Life</h1>
            <Rating compact={false} />
            <StyledCalendarGrid>
                {Array.from({ length: settings.lifeExpectancy }, (_, i) => (
                    <StyledRow $showRowCounter={i % 5 === 0}>
                        <p id="age-count" className="age-count">{i}</p>
                        <Year key={i} currentYear={i} weeksToDisable={numWeeks > 0 ? numWeeks -= 52 : -1} />
                    </StyledRow>
                ))}
            </StyledCalendarGrid>
        </StyledCalendar>
    );
}

export default Calendar;
