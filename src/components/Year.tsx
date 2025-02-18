import styled from 'styled-components';
import EmptySquare from './EmptySquare';
import { NUM_WEEKS_IN_YEAR } from '../utils/mixins';

const StyledYear = styled.div`
	display: grid;
	grid-template-columns: repeat(${NUM_WEEKS_IN_YEAR}, minmax(8px, 1fr));
	grid-gap: 5px;
	margin: 0px 0px 6px 0px;
`;

const StyledColumn = styled.div<{ $showColumnCounter: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;

	.week-count {
		font-size: 12px;
		margin: 0px 0px 3px 0px;
		visibility: ${(props) => (props.$showColumnCounter ? 'visible' : 'hidden')};
	}
`;

function Year({ currentYear }: { currentYear: number }) {
	return (
		<StyledYear>
			{Array.from({ length: NUM_WEEKS_IN_YEAR }).map((_, i) => (
				<StyledColumn $showColumnCounter={i === 0 || (i + 1) % 5 === 0}>
					{currentYear === 0 && (
						<p id='week-count' className='week-count'>
							{i + 1}
						</p>
					)}
					<EmptySquare key={i} currWeek={i} currYear={currentYear} />
				</StyledColumn>
			))}
		</StyledYear>
	);
}

export default Year;
