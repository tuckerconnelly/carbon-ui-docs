import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { replaceState, createOrchestrator } from 'react-stack-nav'

import RouteFade from 'src/modules/common/RouteFade'
import Installation from './Installation'
import Exponent from './Exponent'

class StylingIndex extends Component {
  componentWillMount() {
    if (this.props.url === '/getting-started') {
      this.props.replaceState(0, 'Installation', '/getting-started/installation')
    }
  }
  
  render() {
    const { routeFragment } = this.props
    return (
      <View style={styles.base}>
        <RouteFade active={routeFragment === 'installation'}><Installation /></RouteFade>
        <RouteFade active={routeFragment === 'exponent'}><Exponent /></RouteFade>
      </View>
    )
  }
}

StylingIndex.contextTypes = {
  store: PropTypes.object,
}

StylingIndex.propTypes = {
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
  StylingIndex))

const styles = {
  base: {},
}
