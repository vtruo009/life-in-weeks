import React from "react";

interface SettingsType {
    dob: Date;
    desiredAge: number;
}

interface Action {
    type: 'set_dob' | 'set_desired_age';
    payload: SettingsType;
}

const DEFAULT_SETTINGS: SettingsType = {
    dob: new Date(1989, 11, 13),
    desiredAge: 76,
}

const SettingsContext = React.createContext<{
    state: SettingsType,
    dispatch: React.Dispatch<Action>
}>({
    state: DEFAULT_SETTINGS,
    dispatch: () => null,
});

function settingsReducer(state: SettingsType, action: Action): SettingsType {
    const { type } = action;

    switch (type) {
        case 'set_dob':
            return { ...state, dob: action.payload.dob as Date }
        case 'set_desired_age':
            return { ...state, desiredAge: action.payload.desiredAge as number }
        default:
            // throw new Error()
            return state;
    }
}

function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = React.useReducer(settingsReducer, DEFAULT_SETTINGS);

    return (
        <SettingsContext.Provider value={{ state, dispatch }} >
            {children}
        </SettingsContext.Provider>
    )
}

function useSettingsContext() {
    return React.useContext(SettingsContext);
}

export { useSettingsContext, SettingsProvider }
