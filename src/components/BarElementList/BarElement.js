import React from "react";
import classNames from "class-names";

import { maximumElementValue } from "../../config/utils";

const BarElement = props => {
  const totalElements = props.arraySize;
  const elementValue = props.value;

  const width = 100 * (1 / totalElements);
  const height = 100 * ((elementValue - 1) / maximumElementValue);

  const barElementClasses = classNames({
    "bar-element": true,
    "bar-element--active": props.isActive,
    "bar-element--swapped": props.isSwapped
  });

  return (
    <div
      className={barElementClasses}
      style={{
        height: `${height}%`,
        width: `${width}%`
      }}
    >
      {totalElements <= 20 ? elementValue : null}
    </div>
  );
};

// className={`bar-element ${
// 	elementValue % 2 === 0 ? "bar-element--default" : "bar-element--active"
// }`}

export default BarElement;
