import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { indexRedirect, createOrchestrator } from 'react-stack-nav'

import RouteFade from 'src/modules/common/RouteFade'
import Installation from './Installation'
import Exponent from './Exponent'

class StylingIndex extends Component {
  componentWillMount() {
    if (this.props.routeFragment === '') {
      this.props.indexRedirect(0, 'Installation', 'installation')
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
  indexRedirect: PropTypes.func.isRequired,
  
  // createOrchestrator
  routeFragment: PropTypes.string,
}

const mapStateToProps = ({ navigation }) => ({
  url: navigation.history[navigation.index].url,
})
const mapDispatchToProps = { indexRedirect }

export default
  connect(mapStateToProps, mapDispatchToProps)(
  createOrchestrator('getting-started')(
  StylingIndex))

const styles = {
  base: {},
}