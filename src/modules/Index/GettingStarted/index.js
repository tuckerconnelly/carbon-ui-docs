import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { replaceState, createOrchestrator } from 'react-stack-nav'

import Route from 'src/modules/common/Route'
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
