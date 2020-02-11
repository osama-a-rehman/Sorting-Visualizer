import React from "react";
import PropTypes from "prop-types";

const Button = props => (
	<div className={`${props.classes && props.classes.join(" ")}`}>
		<button className={`button button--${props.size}`} onClick={props.onClick}>
			{props.title}
		</button>
	</div>
);

Button.propTypes = {
	title: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	classes: PropTypes.array,
	onClick: PropTypes.func.isRequired
};

export default Button;
