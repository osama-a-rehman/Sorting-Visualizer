import React from "react";

import {
	// minimumElementValue,
	maximumElementValue
} from "../../config/utils";

const BarElement = props => {
	const totalElements = props.arraySize;
	const elementValue = props.value;

	const width = 100 * (1 / totalElements);
	const height = 100 * (elementValue / maximumElementValue);

	return (
		<div
			className='bar-element'
			style={{
				height: `${height}%`,
				width: `${width}%`
			}}>
			{totalElements <= 20 ? elementValue : null}
		</div>
	);
};

// className={`bar-element ${
// 	elementValue % 2 === 0 ? "bar-element--default" : "bar-element--active"
// }`}

export default BarElement;
