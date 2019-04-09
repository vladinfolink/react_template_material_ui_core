import React from 'react'
export default (WrappedComponent, apiURL = '1234567890') => {
  return props => {
    console.log('props: ', { ...props })

    return (
      <div>
        <WrappedComponent apiURL={apiURL} />
      </div>
    )
  }
}
