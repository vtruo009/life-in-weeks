import styled from "styled-components";
import Square from "../common/Square";
import { COLOR_MAP, WEEK_RATING } from "../utils/mixins";
import React from "react";

const StyledColorLegend = styled.div<{ $compact: boolean }>`
    width: 100%;
    padding: 8px 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${({ $compact }) => $compact ? "lightgray" : "transparent"};
`;

const StyledLabel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;

interface RatingProps {
    compact: boolean;
    handleClick?: React.Dispatch<React.SetStateAction<string>>;
}

function Rating({ compact, handleClick: setColor }: RatingProps) {
    return (
        <StyledColorLegend $compact={compact}>
            {Array.from(Object.values(WEEK_RATING), (rating) => (
                <StyledLabel>
                    <Square
                        key={rating}
                        color={COLOR_MAP[rating]}
                        disabled={!compact}
                        handleClick={() => setColor ? setColor(COLOR_MAP[rating]) : null}
                    />
                    {!compact && <p>{rating}</p>}
                </StyledLabel>
            ))}
        </StyledColorLegend>
    );
}

export default Rating;
