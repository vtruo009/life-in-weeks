import styled from 'styled-components';
import Year from './Year';
import Rating from './Rating';
import Settings from './SettingsPage/Settings';
import { useState } from 'react';

const StyledCalendar = styled.div`
	width: fit-content;
	height: auto;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
	background-color: #f5f5f2;
	padding: 10px;
`;

const StyledCalendarGrid = styled.div`
	:first-child > p {
		align-content: end;
	}
`;

const StyledRow = styled.div<{ $showRowCounter: boolean }>`
	display: grid;
	grid-template-columns: 10px 1fr;
	grid-gap: 5px;
	margin: 0px 5px;
	align-items: end;

	.age-count {
		text-align: end;
		width: 10px;
		font-size: 10px;
		margin: 0px 3px 6px 0px;
		visibility: ${(props) => (props.$showRowCounter ? 'visible' : 'hidden')};
	}

	&.decade {
		margin-bottom: 1rem;
	}
`;

function Calendar() {
	const [desiredAge, setDesiredAge] = useState(80);

	return (
		<StyledCalendar>
			<Settings desiredAge={desiredAge} setDesiredAge={setDesiredAge} />
			<h1>{desiredAge} Years of My Life</h1>
			<Rating compact={false} />
			<StyledCalendarGrid>
				{Array.from({ length: desiredAge }, (_, i) => (
					<StyledRow $showRowCounter={i % 5 === 0} className={`${i !== 0 && i % 10 === 0 ? 'decade' : ''}`}>
						<p id='age-count' className='age-count'>
							{i}
						</p>
						<Year key={i} currentYear={i} />
					</StyledRow>
				))}
			</StyledCalendarGrid>
		</StyledCalendar>
	);
}

export default Calendar;
