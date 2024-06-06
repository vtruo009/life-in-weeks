import React from "react";
import Calendar from "./components/Calendar"
import SettingsContext from "./contexts/SettingsContext";

function App() {
	const [dob, setDOB] = React.useState(new Date());
	const [lifeExpectancy, setLifeExpectancy] = React.useState(76);

	return (
		<SettingsContext.Provider value={{ dob, lifeExpectancy, setDOB, setLifeExpectancy }}>
			<Calendar />
		</SettingsContext.Provider>
	);
}

export default App
