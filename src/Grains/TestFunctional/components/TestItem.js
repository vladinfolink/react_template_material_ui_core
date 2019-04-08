import React, { Fragment, useEffect, memo } from 'react'
import { Button, Input, Row } from 'antd'

const TestItem = props => {
  const { value, itemKey, changeItem, deleteItemFromState } = props

  return (
    <Fragment>
      <Row type='flex' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Input value={value} onChange={changeItem} />
        <Button onClick={deleteItemFromState} type='danger'>
          {itemKey}
        </Button>
      </Row>
    </Fragment>
  )
}

export default memo(TestItem)
