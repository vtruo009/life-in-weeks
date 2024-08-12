import React from "react";
import Square from "../common/Square";
import { Popover, ArrowContainer } from "react-tiny-popover";
import Rating from "./Rating";

function EmptySquare() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [color, setColor] = React.useState('transparent');
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    return (
        <Popover isOpen={isOpen} containerStyle={{ padding: '5px', top: '5px' }} onClickOutside={() => setIsOpen(false)} content={({ childRect, popoverRect }) =>
            <ArrowContainer
                position='top'
                arrowSize={8}
                arrowStyle={{ bottom: '5px' }}
                style={{ width: '100px', display: 'flex' }}
                arrowColor={'lightgray'}
                childRect={childRect}
                popoverRect={popoverRect}
            >
                <Rating compact OnClick={setColor} />
            </ArrowContainer>}>
            <Square color={color} OnClick={() => setIsOpen(!isOpen)} ref={buttonRef} />
        </Popover>
    )
}

export default EmptySquare;
