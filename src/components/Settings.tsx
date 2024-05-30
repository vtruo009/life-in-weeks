
import { GoGear } from "react-icons/go";
import { styled } from "styled-components";

const StyledSettings = styled.button`
    position: absolute;
    top: 1%;
    right: 1%;
    margin: 0px 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
        width: 25px;
        height: auto;
    }
`;

function Settings() {
    return (
        <StyledSettings >
            <GoGear />
        </StyledSettings>
    );
}

export default Settings;
