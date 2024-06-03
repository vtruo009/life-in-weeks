import { styled } from "styled-components";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Dialog, DialogContent, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
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

const StyledTextFieldsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

function Settings() {
    const [isOpen, setIsOpen] = React.useState(false);

    function saveSettings() {
        setIsOpen(false);
    }

    return (
        <>
            <StyledSettings onClick={() => setIsOpen(true)}>
                <SettingsOutlinedIcon />
            </StyledSettings>
            <Dialog open={isOpen}>
                <DialogContent>
                    <StyledTextFieldsContainer>
                        <TextField id="outlined-basic" label="DOB" size="small" />
                        <OutlinedInput
                            id="outlined-basic"
                            label={<InputLabel shrink>Life Expectancy</InputLabel>}
                            size="small"
                            defaultValue={76}
                            endAdornment={<InputAdornment position="end">years</InputAdornment>}
                        />
                    </StyledTextFieldsContainer>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                    <button onClick={saveSettings}>Save</button>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Settings;
