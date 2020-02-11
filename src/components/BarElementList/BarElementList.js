import React, { Component } from "react";
import PropTypes from "prop-types";

import BarElement from "./BarElement";

class BarElementList extends Component {
  render() {
    return (
      <div className="bar-element-list">
        {this.props.elements.map((element, index) => (
          <BarElement
            key={element.id}
            value={element.number}
            arraySize={this.props.elements.length}
            isSwapped={element.isSwapped}
            isActive={element.isActive}
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
  elements: PropTypes.array.isRequired,
  isSwapped: PropTypes.bool,
  isActive: PropTypes.bool
};

export default BarElementList;
