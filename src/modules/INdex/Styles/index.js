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
    if (this.props.url === '/styles') {
      this.props.replaceState(0, 'Theme', '/styles/theme')
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
  url: PropTypes.string,
  replaceState: PropTypes.func.isRequired,
  
  // createOrchestrator
  routeFragment: PropTypes.string,
}

const mapStateToProps = ({ navigation }) => ({
  url: navigation.history[navigation.index].url,
})
const mapDispatchToProps = { replaceState }

export default
  connect(mapStateToProps, mapDispatchToProps)(
  createOrchestrator(
  StyleIndex))

const styles = {
  base: {},
}
