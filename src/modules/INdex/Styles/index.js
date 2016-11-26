import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { replaceState, createOrchestrator } from 'react-stack-nav'

import RouteFade from 'src/modules/common/RouteFade'
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
        <RouteFade active={routeFragment === 'theme'}><Theme /></RouteFade>
        <RouteFade active={routeFragment === 'colors'}><Colors /></RouteFade>
        <RouteFade active={routeFragment === 'responsive'}><Responsive /></RouteFade>
        <RouteFade active={routeFragment === 'elevation'}><Elevation /></RouteFade>
        <RouteFade active={routeFragment === 'typography'}><Typography /></RouteFade>
        <RouteFade active={routeFragment === 'motion'}><Motion /></RouteFade>
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
  createOrchestrator('styles')(
  StyleIndex))

const styles = {
  base: {},
}
