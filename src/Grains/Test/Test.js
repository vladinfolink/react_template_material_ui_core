import React, { Component, Fragment } from 'react';
import TestItem from './components/TestItem.js';
import ItemsObj from './ItemsObj';
Object.freeze(ItemsObj);

class Test extends Component {
  state = { ...ItemsObj };
  
	changeItemHandler = (event, index) => {
    console.log(event, index);
		let ps = { ...this.state.ps };
		ps[`_${index}`].name = event.target.value;
		this.setState({ ps });
	};
	deleteItemHandler = _index => {
    console.log(_index);
		let ps = { ...this.state.ps };
		delete ps[_index];
		this.setState({ ps });
	};

	render() {
		let ps = Object.entries({ ...this.state.ps }).map((item, index) => (
			<TestItem
				index={index}
				name={item[1].name}
				change={event => this.changeItemHandler(event, index)}
				deleteItemHandler={this.deleteItemHandler.bind(this, item[0])}//FIXME: item[0] === _`${index}
				key={index}
			/>
		));
		return <Fragment>{ps}</Fragment>;
	}
}

export default Test;

// Test

// TestItem (obj)

// Items (obj entries)
