import { useContext } from "react";

import styles from "./index.module.css";
import WeatherContext from "../../contexts/WeatherContext";

import Card from "../Card/";

function List() {
	const { weather } = useContext(WeatherContext);

	console.log(weather);

	return (
		<div>
			<pre>{JSON.stringify(weather?.city, null, 2)}</pre>

			<div className={styles.listContainer}>
				{weather?.list.map((day, index) => (
					<Card key={index} day={day} />
				))}
			</div>
		</div>
	);
}

export default List;
