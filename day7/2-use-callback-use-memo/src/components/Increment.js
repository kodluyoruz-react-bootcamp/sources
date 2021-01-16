import { memo } from "react";

function Increment({ artir }) {
	console.log("Increment component re-render");

	return (
		<div>
			<button onClick={artir}>Increment</button>
		</div>
	);
}

export default memo(Increment);
