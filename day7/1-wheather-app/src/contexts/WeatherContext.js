import { createContext, useState, useEffect } from "react";

import axios from "axios";
import { API_ENDPOINT } from "../constants";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
	const [selected, setSelected] = useState("istanbul");
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const url = `${API_ENDPOINT}/forecast/daily?q=${selected}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

		axios(url).then((res) => setWeather(res.data));
	}, [selected]);

	const values = {
		selected,
		setSelected,
		weather,
	};

	return (
		<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
	);
};

export default WeatherContext;
