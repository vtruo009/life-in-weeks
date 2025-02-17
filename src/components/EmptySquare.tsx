import { useRef, useState } from 'react';
import { Popover, ArrowContainer } from 'react-tiny-popover';
import { styled } from 'styled-components';

const StyledSquare = styled.div`
	border: 1px solid black;
	fill: 'black';
	width: 14px;
	height: 14px;
	padding: 0px;
	/* background-color: 'black'; */
`;

function EmptySquare({ isDisabled = false }: { isDisabled?: boolean }) {
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	return <StyledSquare />;
}

export default EmptySquare;
