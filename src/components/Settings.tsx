import { styled } from "styled-components";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";


const StyledSettings = styled.button`
    position: absolute;
    top: 1%;
    right: 1%;
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
        width: 25px;
        height: auto;
        color: orange;
        
    }
`;

function Settings() {
    return (
        <StyledSettings >
            <SettingsOutlinedIcon />
        </StyledSettings>
    );
}

export default Settings;
