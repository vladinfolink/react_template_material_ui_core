import React, { Fragment, useEffect, useRef, memo } from 'react'
import { Button, Input, Row } from 'antd'
import AuthContext from '../../../context/AuthContext'
const TestItem = props => {
  const { value, itemKey, changeItem, deleteItemFromState } = props

  return (
    <Fragment>
      <AuthContext.Consumer>
        {context => {
          return (
						context.isAuth && (
							<Row type='flex' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Input value={value} onChange={changeItem} />
  <Button onClick={deleteItemFromState} type='danger'>
    {itemKey}
  </Button>
							</Row>
						)
          )
        }}
      </AuthContext.Consumer>
    </Fragment>
  )
}

export default memo(TestItem)
