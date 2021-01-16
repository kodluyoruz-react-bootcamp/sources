import { useContext } from "react";

import { cities } from "../../constants";

import WeatherContext from "../../contexts/WeatherContext";

function Header() {
	const data = useContext(WeatherContext);
	console.log(data);

	return (
		<div>
			<select style={{ padding: 10 }}>
				{cities.map((city) => (
					<option key={city.id} value={city.id}>
						{city.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Header;
