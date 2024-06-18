import React from "react";

interface SettingsContextProps {
    dob: Date;
    lifeExpectancy: number;
    setDOB: React.Dispatch<React.SetStateAction<Date>>;
    setLifeExpectancy: React.Dispatch<React.SetStateAction<number>>;
}

export const defaultSettings: SettingsContextProps = {
    dob: new Date(1997, 3, 14),
    lifeExpectancy: 76,
    setDOB: () => { },
    setLifeExpectancy: () => { },
};

const SettingsContext = React.createContext(defaultSettings);

export default SettingsContext;
