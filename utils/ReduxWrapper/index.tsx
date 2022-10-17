import * as React from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'

type Component = React.FC


const ReduxWrapper = (Component: Component, props: any) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
)

export default ReduxWrapper
