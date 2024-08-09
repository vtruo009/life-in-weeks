import { styled } from "styled-components";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, Modal } from "@mui/material";
import React from "react";

const StyledSettings = styled.button`
    position: absolute;
    top: 0%;
    right: 0%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: inherit;

    svg {
        width: 24px;
        height: auto;
        color: #3D3D3D;
    }
`;

const BoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '200px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

function Settings() {
    const [isOpen, setIsOpen] = React.useState(false);

    function saveSettings() {
        setIsOpen(false);
    }

    return (
        <StyledSettings onClick={() => setIsOpen(!isOpen)}>
            <Modal open={isOpen}>
                <Box sx={BoxStyle}>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                    <button onClick={saveSettings} >Save</button>
                </Box>
            </Modal>
            <SettingsOutlinedIcon />
        </StyledSettings>
    );
}

export default Settings;
