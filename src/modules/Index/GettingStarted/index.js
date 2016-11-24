import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { replaceState, createOrchestrator } from 'react-stack-nav'

import Route from 'src/modules/common/Route'
import Installation from './Installation'
import Exponent from './Exponent'

class StylingIndex extends Component {
  componentWillMount() {
    if (this.props.routeFragment === undefined) {
      this.props.replaceState(0, 'theming', '/getting-started/installation')
    }
  }
  
  render() {
    const { routeFragment } = this.props
    return (
      <View style={styles.base}>
        <Route active={routeFragment === 'installation'}><Installation /></Route>
        <Route active={routeFragment === 'exponent'}><Exponent /></Route>
      </View>
    )
  }
}

StylingIndex.contextTypes = {
  store: PropTypes.object,
}

StylingIndex.propTypes = {
  // connect
  replaceState: PropTypes.func.isRequired,
  
  // createOrchestrator
  routeFragment: PropTypes.string,
}

export default
  connect(null, { replaceState })(
  createOrchestrator(
  StylingIndex))

const styles = {
  base: {},
}
