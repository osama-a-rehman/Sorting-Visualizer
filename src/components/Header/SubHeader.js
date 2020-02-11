import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

import {
	generateBtnTitle,
	changeSizeTitle,
	selectSorterTitle,
	minimumArraySize,
	maximumArraySize,
	sorters,
	sortTitle
} from "../../config/utils";

class SubHeader extends React.Component {
	state = {
		arraySize: minimumArraySize,
		selectedSorterIndex: 0
	};

	render() {
		return (
			<div className='sub-header'>
				<Container>
					<Row className='align-items-center'>
						<Col md='3'>
							<Button
								title={generateBtnTitle.toUpperCase()}
								size='large'
								onClick={this.props.onBtnGenerateNewArrayClicked}
							/>
						</Col>

						<Col style={{ textAlign: "center" }} md='3'>
							<h6 style={{ fontWeight: "bold" }}>{changeSizeTitle}</h6>
							<RangeSlider
								min={minimumArraySize}
								max={maximumArraySize}
								value={this.props.arraySize}
								step={2}
								onChange={event => {
									this.props.onArraySizeUpdate(event.target.value);
								}}
								// tooltip='on'
								// tooltipPlacement='bottom'
								// tooltipLabel={() => this.state.arraySize}
							/>
						</Col>

						<Col style={{ textAlign: "center" }} md='3'>
							<h5 style={{ fontWeight: "bold" }}>{selectSorterTitle}</h5>
							<DropdownButton
								variant='secondary'
								title={sorters[this.props.selectedSorterIndex]}
								onSelect={this.props.onSelectedSorterUpdate}>
								{sorters.map((sorter, index) => (
									<Dropdown.Item key={index} eventKey={index}>
										{sorter}
									</Dropdown.Item>
								))}
							</DropdownButton>
						</Col>

						<Col md='3' className='pull-right'>
							<Button
								classes={["pull-right"]}
								title={sortTitle.toUpperCase()}
								size='large'
								onClick={this.props.onBtnSortClicked}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

SubHeader.propTypes = {
	arraySize: PropTypes.number.isRequired,
	selectedSorterIndex: PropTypes.number.isRequired,
	onArraySizeUpdate: PropTypes.func.isRequired,
	onSelectedSorterUpdate: PropTypes.func.isRequired,
	onBtnGenerateNewArrayClicked: PropTypes.func.isRequired,
	onBtnSortClicked: PropTypes.func.isRequired
};

export default SubHeader;
