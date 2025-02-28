import styled, { css, keyframes } from 'styled-components';
import { forwardRef } from 'react';

const blink = keyframes`
		50% {
			opacity: 0;
		}
`;

const StyledSquare = styled.button<{ $color: string; $lastWeek?: boolean }>`
	border: 1px solid black;
	width: 14px;
	height: 14px;
	padding: 0px;
	cursor: pointer;
	background-color: ${({ $color: $color }) => $color};
	animation: ${({ $lastWeek: $lastWeek }) =>
		$lastWeek &&
		css`
			${blink} 0.5s linear infinite
		`};

	&:disabled {
		cursor: default;
	}
`;

interface SquareProps {
	color: string;
	lastWeek?: boolean;
	disabled?: boolean;
	handleClick?: () => void;
}

const Square = forwardRef<HTMLButtonElement, SquareProps>(
	({ color, lastWeek, disabled = false, handleClick }, ref) => {
		return (
			<StyledSquare
				$color={color}
				$lastWeek={lastWeek}
				disabled={disabled}
				onClick={handleClick}
				ref={ref}
			/>
		);
	}
);

export default Square;
