import React, { Component, PropTypes } from 'react'
import { View } from 'react-native-universal'
import { Display2, Colors } from 'carbon-ui'

class Components extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Display2>Installation</Display2>
      </View>
    )
  }
}

Components.propTypes = {
  style: PropTypes.object,
}

export default Components

const styles = {
  base: {
    flex: 1,
    
    backgroundColor: Colors.white,
  },
}
