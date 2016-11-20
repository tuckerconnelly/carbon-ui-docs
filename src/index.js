import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'carbon-ui'

import Layout from './modules'
import createStore from './redux'
import theme from './theme'

const store = createStore()

// Stateful component so it hot reloads
class App extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            {this.props.children}
          </Layout>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
