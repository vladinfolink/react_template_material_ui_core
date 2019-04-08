import React, { Component, Fragment } from 'react';
import TestItem from './components/TestItem.js';
import ItemsObj from './ItemsObj';
import { Button } from 'antd';
Object.freeze(ItemsObj);

class Test extends Component {
	constructor(props) {
		super(props);
		console.log('constructor');
		this.state = { ...ItemsObj, testObjectKey: this.props.testObjectKey || '__testObjectKey' };
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		//FIXME: mounting + TODO: updating															1			=>5
		// When props change, sync state, don't cause side effects
		console.log('__getDerivedStateFromProps', nextProps);

		return 0;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		//TODO:  (UPDATE)																															=>9
		//returns snapshot object to configure
		//last minute DOM operations -> no changes, just data get (scrolling position)
		console.log('getSnapshotBeforeUpdate');
		return { pixels: 12 };
	}

	componentDidMount() {
		//FIXME: mounting										==>CAUSE SIDE EFFECT, DON'T CALL setState()	SYNCHRONOUSLY		4
		console.log(`componentDidMount`);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		//TODO: (UPDATE) => allows cancelling the updating process				=>6
		console.log('shouldComponentUpdate');
		// continue update ? return true : return false; => compare this.props with nextProps
		return true;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		//TODO:  (UPDATE)																																	=>10
		//==> CAN CAUSE SIDE EFFECTS (ONLY ASYNC AJAX); fetch new data frpom server
		console.log('componentDidUpdate', 'snapshot: ', snapshot);
	}

	componentWillUnmount() {
		//==> LAST
		console.log(`componentWillUnmount`);
	}

	changeItemHandler = (event, accessor) => {
		const ps = { ...this.state.ps };
		ps[accessor].value = event.target.value;
		this.setState({ ps });
	};
	deleteItemHandler = accessor => {
		console.log(accessor);
		const ps = { ...this.state.ps };
		delete ps[accessor];
		this.setState({ ps });
	};

	render() {
		//FIXME: mounting + updating TODO:																																					2			=>7
		// 																																			==> RENDER CHILD COMPONENTS									3			=>8 (update child components)

		console.log('__render');

		let ps = Object.entries({ ...this.state.ps }).map((item, index) => (
			<TestItem
				accessor={item[0]}
				value={item[1].value}
				key={index}
				changeItemHandler={event => this.changeItemHandler(event, item[0])} //item[0] === accessor
				deleteItemHandler={this.deleteItemHandler.bind(this, item[0])}
			/>
		));
		return (
			<Fragment>
				<Button onClick={this.props.changeTestUpdate} type="danger">
					change testUpdate from parent
				</Button>
				{this.props.testUpdate && ps}
			</Fragment>
		);
	}
}

export default Test;
