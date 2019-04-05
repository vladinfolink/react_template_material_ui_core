import React, { Fragment, useState } from 'react';
import TestItem from './components/TestItem';
import ItemsObj from './ItemsObj';
import { Button } from 'antd';
Object.freeze(ItemsObj);

const TestFunctional = () => {
	const [state, nextState] = useState(ItemsObj);
	const [showItems, changeShowItems] = useState(true);

	const changeItem = (event, itemKey) => {
		state[itemKey].value = event.target.value;
		nextState({ ...state });
	};

	const deleteItemFromState = itemKey => {
		let s = { ...state };
		delete s[itemKey];
		nextState({ ...s });
	};

	const items = Object.entries(state).map(item => (
		<TestItem
			key={item[0]}
			itemKey={item[0]}
			value={item[1].value}
			changeItem={event => changeItem(event, item[0])}
			deleteItemFromState={itemKey => deleteItemFromState(item[0])}
		/>
	));

	return (
		<Fragment>
			<Button onClick={() => changeShowItems(!showItems)} type="dange">
				Toggle Items
			</Button>
			{showItems && items}
		</Fragment>
	);
};

export default TestFunctional;
