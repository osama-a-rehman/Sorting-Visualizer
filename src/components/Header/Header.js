import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
	const appTitle = "Sorting Visualizer";

	return (
		<div className='header'>
			<Container>
				<Row>
					<Col>
						<h2>{appTitle}</h2>
					</Col>
					<div className='pull-right'>Social Media icons goes here</div>
				</Row>
			</Container>
		</div>

		// <Button title={headerTitle.toUpperCase()} />
	);
};

export default Header;
