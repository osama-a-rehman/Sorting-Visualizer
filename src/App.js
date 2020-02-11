import React from "react";

import "./styles/App.scss";

import Header from "./components/Header/Header";
import SubHeader from "./components/Header/SubHeader";
import BarElementList from "./components/BarElementList/BarElementList";
import {
	minimumArraySize,
	getRandomArray,
	sorters,
	getSorter
} from "./config/utils";

import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
	state = {
		arraySize: minimumArraySize,
		selectedSorterIndex: 1,
		elements: getRandomArray()
	};

	handlerUpdateArraySize = newArraySize => {
		this.setState({
			arraySize: Number(newArraySize),
			elements: getRandomArray(Number(newArraySize))
		});
	};

	handlerUpdateSelectedSorter = index => {
		this.setState({
			selectedSorterIndex: Number(index)
		});
	};

	onBtnGenerateNewArrayClicked = () => {
		this.setState(prevState => ({
			elements: getRandomArray(prevState.arraySize)
		}));
	};

	onBtnSortClicked = () => {
		const sorterName = sorters[this.state.selectedSorterIndex];

		console.log(sorterName);

		const sorter = getSorter(sorterName);

		const oldArray = this.state.elements;

		const newArray = sorter(oldArray);

		this.setState({ elements: [...newArray] });
	};

	render() {
		return (
			<div className='App'>
				<Header />
				<SubHeader
					arraySize={this.state.arraySize}
					selectedSorterIndex={this.state.selectedSorterIndex}
					onBtnGenerateNewArrayClicked={this.onBtnGenerateNewArrayClicked}
					onBtnSortClicked={this.onBtnSortClicked}
					onArraySizeUpdate={this.handlerUpdateArraySize}
					onSelectedSorterUpdate={this.handlerUpdateSelectedSorter}
				/>

				<Container className='bar-element-list__container'>
					<Row className='bar-element-list__row'>
						<Col>
							<BarElementList elements={this.state.elements} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
