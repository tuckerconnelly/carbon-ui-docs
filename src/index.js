import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import { Display2 } from 'carbon-ui'

import Layout from './modules/Layout'
import createStore from './redux'

const store = createStore()

// Stateful component so it hot reloads
class App extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <View>
            <Display2>yoyoyoyoy</Display2>
          </View>
        </Layout>
      </Provider>
    )
  }
}

export default App
