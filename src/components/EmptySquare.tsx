import { useRef, useState } from 'react';
import { Popover, ArrowContainer } from 'react-tiny-popover';
import Rating from './Rating';
import { useSettingsContext } from '../contexts/SettingsContext';
import { NUM_WEEKS_IN_YEAR } from '../utils/mixins';
import Square from '../common/Square';

function EmptySquare({
	currYear,
	currWeek,
}: {
	currYear: number;
	currWeek: number;
}) {
	const { state } = useSettingsContext();
	const [isOpen, setIsOpen] = useState(false);
	const [color, setColor] = useState('transparent');
	const disabled = currWeek + NUM_WEEKS_IN_YEAR * currYear < state.weeksLived;
	const buttonRef = useRef<HTMLButtonElement>(null);

	return (
		<Popover
			isOpen={isOpen}
			containerStyle={{ padding: '5px', top: '5px' }}
			onClickOutside={() => setIsOpen(false)}
			content={({ childRect, popoverRect }) => (
				<ArrowContainer
					position='top'
					arrowSize={8}
					arrowStyle={{ bottom: '5px' }}
					style={{ width: '100px', display: 'flex' }}
					arrowColor={'lightgray'}
					childRect={childRect}
					popoverRect={popoverRect}
				>
					<Rating compact handleClick={setColor} />
				</ArrowContainer>
			)}
		>
			<Square
				color={disabled ? 'black' : color}
				disabled={disabled}
				handleClick={() => setIsOpen(!isOpen)}
				ref={buttonRef}
			/>
		</Popover>
	);
}

export default EmptySquare;
