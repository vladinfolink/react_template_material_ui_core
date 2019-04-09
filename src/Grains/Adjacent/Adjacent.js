import React, { Component } from 'react';
import WrapperAdjacentHoc from './WrapperAdjacentHoc';
class Adjacent extends Component {
	state = {};
	render() {
		return (
			<WrapperAdjacentHoc>
				<h1>Adjacent Component</h1>
				<h2> Adjacent Component</h2>
			</WrapperAdjacentHoc>
		);
	}
}

export default Adjacent;
