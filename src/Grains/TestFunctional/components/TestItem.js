import React, { Fragment, useEffect, memo } from 'react';
import { Button, Input, Row } from 'antd';

const TestItem = props => {
	const { value, itemKey, changeItem, deleteItemFromState } = props;

	useEffect(() => {
		console.log('useEffect for first mount');
	}, []); // as componentDidMount

	useEffect(() => {
		console.log('useEffect every render cycle');
	});

	useEffect(() => {
		console.log('useEffect for value & item change');
	}, [value, itemKey]); //componentDidUpdate

	useEffect(() => {
		return () => {
			console.log('useEffect item DESTROY ___[]');
		};
	}, []); //as componentWillUnmount()

	// [] => empty array => when component renders th first time
	// no arguments => every cycle
	// [arguments] =>  on data changes in arguments

	return (
		<Fragment>
			<Row type="flex" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Input value={value} onChange={changeItem} />
				<Button onClick={deleteItemFromState} type="danger">
					{itemKey}
				</Button>
			</Row>
		</Fragment>
	);
};

export default memo(TestItem);
