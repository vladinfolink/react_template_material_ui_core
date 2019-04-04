import React, { Fragment, useState, useEffect } from 'react';
import TestItem from './components/TestItem';
import ItemsObj from './ItemsObj';
Object.freeze(ItemsObj)

const TestFunctional = () => {
	const [state, nextState] = useState(ItemsObj);

	const changeItem = (event, itemKey) => {
		state[itemKey].value = event.target.value;
		nextState({ ...state });
	};

	const deleteItemFromState = itemKey => {
		delete state[itemKey];
		nextState({ ...state });
	};

	const items = Object.entries(state).map(item => (
		<TestItem
			itemKey={item[0]}
			value={item[1].value}
			changeItem={event => changeItem(event, item[0])}
			deleteItemFromState={itemKey => deleteItemFromState(item[0])}
		/>
	));

	return <Fragment>{items}</Fragment>;
};

export default TestFunctional;
