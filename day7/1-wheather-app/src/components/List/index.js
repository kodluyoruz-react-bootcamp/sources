import { useContext } from "react";

import WeatherContext from "../../contexts/WeatherContext";

function List() {
	const data = useContext(WeatherContext);
	console.log(data);

	return <div>List</div>;
}

export default List;
