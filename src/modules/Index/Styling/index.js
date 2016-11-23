import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { replaceState, createOrchestrator } from 'react-stack-nav'

import Route from 'src/modules/common/Route'
import Theming from './Theming'
import Colors from './Colors'
import Responsive from './Responsive'
import Elevation from './Elevation'
import Typography from './Typography'
import Motion from './Motion'

class StylingIndex extends Component {
  componentWillMount() {
    if (this.props.routeFragment === undefined) {
      this.props.replaceState(0, 'theming', '/styling/theming')
    }
  }
  
  render() {
    const { routeFragment } = this.props
    return (
      <View style={styles.base}>
        <Route active={routeFragment === 'theming'}><Theming /></Route>
        <Route active={routeFragment === 'colors'}><Colors /></Route>
        <Route active={routeFragment === 'responsive'}><Responsive /></Route>
        <Route active={routeFragment === 'elevation'}><Elevation /></Route>
        <Route active={routeFragment === 'typography'}><Typography /></Route>
        <Route active={routeFragment === 'motion'}><Motion /></Route>
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
