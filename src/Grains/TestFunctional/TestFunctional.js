import React, { Fragment, useState, useEffect, memo } from 'react'
import TestItem from './components/TestItem'
import ItemsObj from './ItemsObj'

Object.freeze(ItemsObj)

const TestFunctional = props => {
  const [state, nextState] = useState(ItemsObj)
  const [showItems, changeShowItems] = useState(true)

  const changeItem = (event, itemKey) => {
    state[itemKey].value = event.target.value
    nextState({ ...state })
  }

  const deleteItemFromState = itemKey => {
    let s = { ...state }
    delete s[itemKey]
    nextState({ ...s })
  }

  const items = Object.entries(state).map(item => (
    <TestItem
      key={item[0]}
      itemKey={item[0]}
      value={item[1].value}
      changeItem={event => changeItem(event, item[0])}
      deleteItemFromState={itemKey => deleteItemFromState(item[0])}
		/>
	))

  useEffect(() => {
    console.log('every') // componentDidMount + componentDidUpdate
    return () => {
      console.log('cleanup in 2nd useEffect')
    }
  })

  useEffect(() => {
    console.log('only  on component mount')
    return () => {
      console.log('unmount cleanup')
    }
  }, [])

  useEffect(() => {
    console.log('props change')
  }, [props.testUpdateProps])

  return (
    <Fragment>
      {props.children}
      {items}
    </Fragment>
  )
}

export default memo(TestFunctional)
