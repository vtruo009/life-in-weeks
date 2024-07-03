import Calendar from "./components/Calendar"
import SettingsProvider from "./contexts/SettingsContext";

function App() {
	return (
		<SettingsProvider>
			<Calendar />
		</SettingsProvider>
	);
}

export default App;
