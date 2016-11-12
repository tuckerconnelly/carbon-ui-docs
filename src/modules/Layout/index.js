import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'

class Layout extends Component {
  state = { authed: false }

  render() {
    const { children, ...other } = this.props
    return (
      <View style={styles.root} {...other}>
        {children}
      </View>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout

const styles = {
  root: {
    flex: 1,
  },
}
