import React, { Component } from 'react';
import Test from './Grains/Test/Test';
import TestFunctional from './Grains/TestFunctional/TestFunctional';
import WrapperAdjacentHoc from './Grains/Adjacent/WrapperAdjacentHoc';
import Adjacent from './Grains/Adjacent/Adjacent';
import { Button } from 'antd';
class App extends Component {
	state = { testUpdateProps: true, showTestComponent: true };

	render() {
		return (
			<div className="App">
				<h1>{this.props.apiURL}</h1>
				<Adjacent />
				<Test changeTestUpdate={this.changeTestUpdate} testUpdate={this.state.testUpdateProps} />
				<Button onClick={() => this.setState({ showTestComponent: !this.state.showTestComponent })}>
					{' '}
					ShowTestComponent{' '}
				</Button>
				{this.state.showTestComponent && (
					<TestFunctional testUpdateProps={this.state.testUpdateProps}>
						<Button onClick={() => this.setState({ testUpdateProps: !this.state.testUpdateProps })}>
							testUpdateProps
						</Button>
					</TestFunctional>
				)}
			</div>
		);
	}
}

export default WrapperAdjacentHoc(App);
