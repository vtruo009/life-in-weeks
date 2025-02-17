import styled from 'styled-components';
import { NUM_WEEKS_IN_YEAR } from '../utils/mixins';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { calcNumWeeks } from '../utils/calendar-helpers';

const LIFE_EXPECTANCY = 80;

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

const StyledInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 0 1.5rem;
`;

const StyledRowContainer = styled.div`
	display: grid;
	grid-template-areas: '12px 1fr';
	grid-gap: 5px;
	margin: 0px 5px;
`;

const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: min(5px);
	align-items: flex-end;
	margin: 0;
`;

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledP = styled.p<{ $showCounter: boolean }>`
	margin: 0;
	&#age-count {
		/* margin: 0px 3px 0px 0px; */
		visibility: ${(props) => (props.$showCounter ? 'visible' : 'hidden')};
	}

	&#week-count {
		display: ${(props) => (props.$showCounter ? '' : 'none')};
		/* visibility: ${(props) => (props.$showCounter ? 'visible' : 'hidden')}; */
	}
`;

const StyledTextField = styled(TextField)`
	.MuiOutlinedInput-root {
		width: 30%;
		border-radius: 10px;
		padding: 1%;

		.MuiOutlinedInput-notchedOutline {
			border: 1px solid black;
		}

		&.Mui-focused {
			.MuiOutlinedInput-notchedOutline {
				border: 2px solid black;
			}
		}
	}
`;

const StyledSquare = styled.div<{ $filled?: boolean }>`
	border: 1px solid black;
	/* fill: ${(props) => (props.$filled ? 'black' : 'transparent')}; */
	width: 14px;
	height: 14px;
	padding: 0px;
	background-color: ${(props) => (props.$filled ? 'black' : 'transparent')};
`;

function Calendar() {
	// const [dob, setDob] = useState(new Date(1997, 3, 14));
	const [weeksLived, setWeeksLived] = useState(0);

	return (
		<StyledCalendar>
			<h1>{LIFE_EXPECTANCY} Years of My Life</h1>
			<h2>{weeksLived} Weeks Lived</h2>
			<StyledInputContainer>
				<StyledTextField
					name='dob'
					label='DOB'
					type='date'
					size='small'
					variant='outlined'
					fullWidth
					InputLabelProps={{ shrink: true }}
					onChange={(e) => {
						if (e.target.value) {
							const dob = new Date(e.target.value);
							const weeksLived = calcNumWeeks(dob);
							setWeeksLived(weeksLived);
						}
					}}
				/>
			</StyledInputContainer>
			{Array.from({ length: LIFE_EXPECTANCY }).map((_, i) => (
				<StyledRow key={i}>
					<StyledP $showCounter={i % 5 === 0} id='age-count'>
						{i}
					</StyledP>
					{Array.from({ length: NUM_WEEKS_IN_YEAR }).map((_, j) => (
						<StyledColumn>
							<StyledP
								key={`${i}-${j}`}
								id='week-count'
								$showCounter={i === 0 && (j + 1) % 5 === 0}
							>
								{j + 1}
							</StyledP>
							<StyledSquare $filled={i * NUM_WEEKS_IN_YEAR + j < weeksLived} />
						</StyledColumn>
					))}
				</StyledRow>
			))}
		</StyledCalendar>
	);
}

export default Calendar;
