import { useEffect, useContext } from "react";

import Header from "./components/Header";
import List from "./components/List";
import CurrentLocationData from "./components/CurrentLocationData";

import { API_ENDPOINT } from "./constants";
import axios from "axios";

import WeatherContext from "./contexts/WeatherContext";

function Container() {
	const { setCurrentLocationData } = useContext(WeatherContext);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				axios(
					`${API_ENDPOINT}/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_API_KEY}`
				).then((res) => setCurrentLocationData(res.data));
			});

			return false;
		}

		console.log("Geolocation is not supported by this browser.");
	}, [setCurrentLocationData]);

	return (
		<div className="App">
			<Header />
			<List />
			<CurrentLocationData />
		</div>
	);
}

export default Container;
