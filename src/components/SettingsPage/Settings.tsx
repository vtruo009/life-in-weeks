import React from "react";
import { styled } from "styled-components";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment,
    TextField
} from "@mui/material";
import { useSettingsContext } from "../../contexts/SettingsContext";

const StyledSettingsButton = styled.button`
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

const StyledDialog = styled(Dialog)`
    .MuiPaper-root {
        background-color: #F5F5F2;
    }

    .MuiButton-contained {
        color: #2A2824;
        background-color: #EBEBE8;

        &:hover {
            background-color: #E0E0DD;
        }
    }

    .MuiButton-outlined {
        color: #2A2824;
        border-color: #2A2824;

        &:hover {
            background-color: rgba(40, 42, 36, 0.05);
            border-color: #2A2824;
        }
    }

    .MuiInputLabel-root, .MuiOutlinedInput-root {
        &.Mui-focused {
            color: #2A2824;
            border-color: #2A2824;

            .MuiOutlinedInput-notchedOutline {
                border-color: #2A2824;
            }
        }
    }
    
`;

const StyledTextFieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0px 4px;
    gap: 10px;
`;

function Settings() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { state, dispatch } = useSettingsContext();

    function saveSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: 'set_dob', payload: { ...state, dob: new Date(e.currentTarget.dob.value) } });
        dispatch({ type: 'set_desired_age', payload: { ...state, desiredAge: e.currentTarget['life-expectancy'].valueAsNumber } });
        setIsOpen(false);
    }

    return (
        <>
            <StyledSettingsButton onClick={() => setIsOpen(true)}>
                <SettingsOutlinedIcon />
            </StyledSettingsButton>
            <StyledDialog
                open={isOpen}
                PaperProps={{
                    component: 'form',
                    onSubmit: saveSettings
                }}
            >
                <DialogTitle>Settings</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Please enter date of birth and life expectancy.
                        <br />
                        Note: changing the values will reset the calendar and ratings will be lost.
                    </DialogContentText>
                    <StyledTextFieldContainer>
                        <TextField
                            name="dob"
                            label="DOB"
                            type="date"
                            size="small"
                            variant="outlined"
                            fullWidth
                            defaultValue={state.dob.toISOString().substring(0, 10)}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            name="life-expectancy"
                            label="Life Expectancy"
                            type="number"
                            size="small"
                            variant="outlined"
                            fullWidth
                            defaultValue={state.desiredAge}
                            InputProps={{ endAdornment: <InputAdornment position="end">years</InputAdornment> }}
                        />
                    </StyledTextFieldContainer>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button variant="contained" type="submit" >Save</Button>
                </DialogActions>
            </StyledDialog>
        </>
    );
}

export default Settings;
