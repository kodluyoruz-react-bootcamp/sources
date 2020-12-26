import Button from "./components/Button";
import UserList from "./components/UserList";

function App() {
	return (
		<>
			<Button
				text="Click Me"
				disabled={false}
				styles={{ fontSize: 22, color: "#333" }}
			/>
			<UserList users={["Murat", "Kenan", "Ayşe"]} data={{ a: 1, b: 2 }} />
		</>
	);
}

export default App;
