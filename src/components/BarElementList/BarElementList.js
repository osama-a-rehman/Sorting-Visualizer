import React, { Component } from "react";
import PropTypes from "prop-types";

import BarElement from "./BarElement";
import { getRandomArray } from "../../config/utils";

class BarElementList extends Component {
	render() {
		return (
			<div className='bar-element-list'>
				{this.props.elements.map((elementValue, index) => (
					<BarElement
						key={index}
						value={elementValue}
						arraySize={this.props.elements.length}
					/>
				))}
			</div>
		);
	}
}

// this.state.elements.map((elementValue, index) => (
// 	<BarElement
// 		key={index}
// 		value={elementValue}
// 		arraySize={this.props.arraySize}
// 	/>
// ))

// this.state.elements.map(element => <BarElement />)

BarElementList.propTypes = {
	elements: PropTypes.array.isRequired
};

export default BarElementList;
