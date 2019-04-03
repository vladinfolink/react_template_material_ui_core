import React, { Fragment } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';

const TestItem = props => {
	return (
		<Fragment>
			<br />
			<Input
      onChange={props.change}
       value={props.name} />
			<br />
			<Button
      onClick={props.deleteItemHandler}
      >{props.index}</Button>
		</Fragment>
	);
};

export default TestItem;
