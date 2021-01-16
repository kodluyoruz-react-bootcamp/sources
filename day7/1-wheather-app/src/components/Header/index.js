import { useContext } from "react";

import { cities } from "../../constants";

import WeatherContext from "../../contexts/WeatherContext";

function Header() {
	const { selected, setSelected } = useContext(WeatherContext);

	const handleOnChange = (e) => {
		setSelected(e.target.value);
	};

	return (
		<div>
			<select
				style={{ padding: 10 }}
				onChange={handleOnChange}
				defaultValue={selected}
			>
				{cities.map((city) => (
					<option key={city.id} value={city.name}>
						{city.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Header;
