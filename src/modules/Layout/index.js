import React, { Component, PropTypes } from 'react'
import { View } from 'react-native-universal'
import ps from 'react-native-ps'
import { AppBar } from 'carbon-ui'

class Layout extends Component {
  state = { authed: false }

  render() {
    const { children, ...other } = this.props
    return (
      <View style={styles.root} {...other}>
        <AppBar title="Title" />
        {children}
      </View>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout

const styles = ps({
  root: {
    flex: 1,
  },
  
  
  ios: {
    root: {
      marginTop: 20,
    },
  },
})
