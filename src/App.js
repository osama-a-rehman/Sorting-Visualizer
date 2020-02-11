import React from "react";

import "./styles/App.scss";

import Header from "./components/Header/Header";
import SubHeader from "./components/Header/SubHeader";
import BarElementList from "./components/BarElementList/BarElementList";
import {
  minimumArraySize,
  createRandomElements,
  sorters,
  getSorter
} from "./config/utils";

import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  state = {
    arraySize: minimumArraySize,
    selectedSorterIndex: 1,
    elements: createRandomElements()
  };

  handlerUpdateArraySize = newArraySize => {
    this.setState({
      arraySize: Number(newArraySize),
      elements: createRandomElements(Number(newArraySize))
    });
  };

  handlerUpdateSelectedSorter = index => {
    this.setState({
      selectedSorterIndex: Number(index)
    });
  };

  onBtnGenerateNewArrayClicked = () => {
    this.setState(prevState => ({
      elements: createRandomElements(prevState.arraySize)
    }));
  };

  onBtnSortClicked = () => {
    const sorterName = sorters[this.state.selectedSorterIndex];
    const sorter = getSorter(sorterName);

    const oldArray = this.state.elements;
    const oldElementValuesArray = oldArray.map(element => element.number);

    sorter(oldElementValuesArray).subscribe(
      consideration => {
        const { left: i, right: j, didSwap } = consideration;
        // console.log(`Consideration: ${i}, ${j}`);

        this.setState(prevState => {
          let currArray = [...prevState.elements];
          currArray = currArray.map(element => ({
            ...element,
            isSwapped: false,
            isActive: false
          }));

          if (didSwap) {
            let temp = currArray[i];
            currArray[i] = currArray[j];
            currArray[j] = temp;

            currArray[i].isSwapped = true;
            currArray[j].isSwapped = true;
          } else {
            currArray[i].isActive = true;
            currArray[j].isActive = true;
          }

          return {
            elements: currArray
          };
        });
      },
      error => console.error(error),
      () => {
        this.setState(prevState => {
          const currArray = prevState.elements.map(element => ({
            ...element,
            isSwapped: false,
            isActive: false
          }));

          return {
            elements: currArray
          };
        });
      }
    );

    // const newArray = sorter(oldArray);

    // this.setState({ elements: [...newArray] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader
          arraySize={this.state.arraySize}
          selectedSorterIndex={this.state.selectedSorterIndex}
          onBtnGenerateNewArrayClicked={this.onBtnGenerateNewArrayClicked}
          onBtnSortClicked={this.onBtnSortClicked}
          onArraySizeUpdate={this.handlerUpdateArraySize}
          onSelectedSorterUpdate={this.handlerUpdateSelectedSorter}
        />

        <Container className="bar-element-list__container">
          <Row className="bar-element-list__row">
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
