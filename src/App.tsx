import React from "react";
import Calendar from "./components/Calendar"
import SettingsContext from "./contexts/SettingsContext";

function App() {
	const settings = React.useContext(SettingsContext);

	return (
		<SettingsContext.Provider value={{ ...settings }}>
			<Calendar />
		</SettingsContext.Provider>
	);
}

export default App;
