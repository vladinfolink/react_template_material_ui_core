import React, { Fragment } from 'react';
import { Button, Input, Icon, Row, Col } from 'antd';

const TestItem = props => {
	
	console.log('TestItem Render');
	
	return (
		<Fragment>
			<Row type="flex" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col xs={24} sm={12} md={8} lg={4} xl={2}>
					<Input value={props.value} onChange={props.changeItemHandler} />
				</Col>
				<Col xs={2} sm={12} md={2} lg={2} xl={2}>
					<Button type="danger" onClick={props.deleteItemHandler}>
						{' '}
						<Icon type="delete" theme="twoTone" /> {props.accessor}
					</Button>
				</Col>
			</Row>
		</Fragment>
	);
};

export default TestItem;
