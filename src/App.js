import React, { Component } from 'react';
import Test from './Grains/Test/Test';
import TestFunctional from './Grains/TestFunctional/TestFunctional';
import { Button } from 'antd';
class App extends Component {
	state = { testUpdateProps: true, showTestComponent: true };

	render() {
		return (
			<div className="App">
				{/*<Test changeTestUpdate={this.changeTestUpdate} testUpdate={this.state.testUpdate} />*/}
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

export default App;
