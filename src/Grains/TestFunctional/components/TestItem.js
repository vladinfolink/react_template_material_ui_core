import React, { Fragment } from 'react';
import { Button, Input,  Row } from 'antd';

const TestItem = props => {
	return (
		<Fragment>
			<Row type="flex" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			<Input value={props.value} onChange={props.changeItem}/>
				<Button
				onClick={props.deleteItemFromState}
				 type='danger'>{props.itemKey}</Button>
			</Row>
		</Fragment>
	);
};

export default TestItem;
