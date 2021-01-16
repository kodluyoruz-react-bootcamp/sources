import React from "react";

import styles from "./index.module.css";

import moment from "moment";
import "moment/locale/tr";

function Card({ day }) {
	return (
		<div className={styles.container}>
			<div className={styles.dayName}>
				{moment(day.dt * 1000).format("dddd")}
			</div>
			<img
				src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
				alt=""
			/>
			<div className={styles.temp}>
				<span>{day.temp.max}º</span>
				<span>{day.temp.min}º</span>
			</div>
		</div>
	);
}

export default Card;
