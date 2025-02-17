import { createContext, Dispatch, useContext, useReducer } from 'react';
import { calcNumWeeks } from '../utils/helpers';

interface SettingsType {
	dob: Date;
	weeksLived: number;
}

interface Action {
	type: 'set_dob';
	payload: SettingsType;
}

const DEFAULT_SETTINGS: SettingsType = {
	dob: new Date(),
	weeksLived: 0,
};

const SettingsContext = createContext<{
	state: SettingsType;
	dispatch: Dispatch<Action>;
}>({
	state: DEFAULT_SETTINGS,
	dispatch: () => null,
});

function settingsReducer(state: SettingsType, action: Action): SettingsType {
	const { type, payload } = action;

	switch (type) {
		case 'set_dob':
			const weeksLived = calcNumWeeks(payload.dob);
			return { ...state, dob: payload.dob as Date, weeksLived };
		default:
			// throw new Error()
			return state;
	}
}

function SettingsProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(settingsReducer, DEFAULT_SETTINGS);

	return (
		<SettingsContext.Provider value={{ state, dispatch }}>
			{children}
		</SettingsContext.Provider>
	);
}

function useSettingsContext() {
	return useContext(SettingsContext);
}

export { useSettingsContext, SettingsProvider };
