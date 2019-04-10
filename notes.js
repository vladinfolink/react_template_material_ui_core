// context:
// universal: 
import React, { useContext } from 'react'
export default React.createContext({
  isAuth: false,
  changeIsAuth: () => {}
});
// context provider:
import AuthContext from '../../context/AuthContext'

const [isAuth, changeIsAuth] = useState(true)

return (
  <AuthContext.Provider value={{ isAuth: isAuth, changeIsAuth: changeIsAuth }}>
    <Button
      onClick={() => {
        return changeIsAuth(!isAuth)
      }}
      type='primary'
    >
      changeIsAuth
    </Button>
    <div
      style={{
        border: '1px solid black'
      }}
    >
      <Fragment>
        {props.children}
        {items}
      </Fragment>
    </div>
  </AuthContext.Provider>
)
// context consumer:
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

// context for classes: contextType:
static ccontextType = AuthContext;
// accessed with: 
this.context.property

//context for function components: 
import {useContext} from 'react';
import AuthContext from '..../';
const authContext = useContext(AuthContext);
authContext.property ...

//useRef:
import React, { Fragment, useEffect, useRef, memo } from 'react'
import { Button, Input, Row } from 'antd'

const TestItem = props => {
  const { value, itemKey, changeItem, deleteItemFromState } = props
  const currentRefInput = useRef(null)
  useEffect(() => {
    currentRefInput.current.focus()
  }, [])
  return (
    <Fragment>
      <Row type='flex' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Input ref={currentRefInput} value={value} onChange={changeItem} />
        <Button onClick={deleteItemFromState} type='danger'>
          {itemKey}
        </Button>
      </Row>
    </Fragment>
  )
}

export default memo(TestItem)

//=========================================

//npm i --save prop-types

import PropTypes from 'prop-types'

TestItem.propTypes = {
  click: PropTypes.func
}

export default TestItem

//=========================================

//setState alternative:

this.setState((prevState, currentProps) => {
	return {
		counter: prevState.counter + 1
	}
})

//=========================================
// Higher order component:
import React from 'react'
export default (WrappedComponent, apiURL='1234567890') => {
  return props => {
    return (
      <div>
        <WrappedComponent apiURL={apiURL} />
      </div>
    )
  }
}

//----------------------------------
// Wrapper component:

import WrapperAdjacentHoc from './Grains/Adjacent/WrapperAdjacentHoc';

import { Button } from 'antd';
class App extends Component {
	state = { testUpdateProps: true, showTestComponent: true };

	render() {
		return (
			<div className="App">
			
				<h1>{this.props.apiURL}</h1>//<============!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				
				<Adjacent />
				
				{/*<Test changeTestUpdate={this.changeTestUpdate} testUpdate={this.state.testUpdate} />*/}
				<Button onClick={() => this.setState({ showTestComponent: !this.state.showTestComponent })}>
					{' '}
					ShowTestComponent{' '}
				</Button>
				{this.state.showTestComponent && (
					<TestFunctional testUpdateProps={this.state.testUpdateProps}>
						<Button onClick={() => this.setState({ testUpdateProps: !this.state.testUpdateProps })}>
							testUpdateProps
						</Button>
					</TestFunctional>
				)}
			</div>
		);
	}
}

export default WrapperAdjacentHoc(App);//<============!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!