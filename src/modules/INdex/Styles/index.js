import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { replaceState, createOrchestrator } from 'react-stack-nav'

import Route from 'src/modules/common/Route'
import Theme from './Theme'
import Colors from './Colors'
import Responsive from './Responsive'
import Elevation from './Elevation'
import Typography from './Typography'
import Motion from './Motion'

class StyleIndex extends Component {
  componentWillMount() {
    if (this.props.routeFragment === undefined) {
      this.props.replaceState(0, 'theme', '/styles/theme')
    }
  }
  
  render() {
    const { routeFragment } = this.props
    return (
      <View style={styles.base}>
        <Route active={routeFragment === 'theme'}><Theme /></Route>
        <Route active={routeFragment === 'colors'}><Colors /></Route>
        <Route active={routeFragment === 'responsive'}><Responsive /></Route>
        <Route active={routeFragment === 'elevation'}><Elevation /></Route>
        <Route active={routeFragment === 'typography'}><Typography /></Route>
        <Route active={routeFragment === 'motion'}><Motion /></Route>
      </View>
    )
  }
}

StyleIndex.contextTypes = {
  store: PropTypes.object,
}

StyleIndex.propTypes = {
  // connect
  replaceState: PropTypes.func.isRequired,
  
  // createOrchestrator
  routeFragment: PropTypes.string,
}

export default
  connect(null, { replaceState })(
  createOrchestrator(
  StyleIndex))

const styles = {
  base: {},
}
