import { useContext } from "react";

import WeatherContext from "../../contexts/WeatherContext";

function CurrentLocationData() {
	const { currentLocationData } = useContext(WeatherContext);
	return (
		<div>
			<h2>{currentLocationData?.timezone}</h2>
			<pre>
				{currentLocationData && JSON.stringify(currentLocationData, null, 2)}
			</pre>
		</div>
	);
}

export default CurrentLocationData;
