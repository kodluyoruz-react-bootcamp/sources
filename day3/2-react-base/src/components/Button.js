import PropTypes from "prop-types";

function Button({ text, disabled, styles }) {
	return (
		<div>
			<button disabled={disabled} style={styles}>
				{text}
			</button>
		</div>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	text: "Click",
	disabled: false,
};

export default Button;
