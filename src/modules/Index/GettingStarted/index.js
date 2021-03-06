import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { replaceTop, createOrchestrator } from 'react-stack-nav'

import RouteFade from 'src/modules/common/RouteFade'
import NotFound from 'src/modules/common/NotFound'

import Installation from './Installation'
import Exponent from './Exponent'
import KnownIssues from './KnownIssues'

const VALID_FRAGMENTS = [
  undefined,
  '',
  'installation',
  'exponent',
  'known-issues',
]

class StylingIndex extends Component {
  componentWillMount() {
    this._indexRedirect(this.props)
  }
  componentWillUpdate(nextProps) {
    this._indexRedirect(nextProps)
  }
  
  _indexRedirect = ({ routeFragment, replaceTop }) =>
    routeFragment === '' && replaceTop(0, 'Installation', 'installation')
  
  render() {
    const { routeFragment } = this.props
    
    return (
      <View style={styles.base}>
        <RouteFade active={routeFragment === 'installation'}><Installation /></RouteFade>
        <RouteFade active={routeFragment === 'exponent'}><Exponent /></RouteFade>
        <RouteFade active={routeFragment === 'known-issues'}><KnownIssues /></RouteFade>
        <RouteFade active={VALID_FRAGMENTS.indexOf(routeFragment) === -1}><NotFound /></RouteFade>
      </View>
    )
  }
}

StylingIndex.contextTypes = {
  store: PropTypes.object,
}

StylingIndex.propTypes = {
  // connect
  replaceTop: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  
  // createOrchestrator
  routeFragment: PropTypes.string,
}

const mapStateToProps = ({ navigation }) => ({
  url: navigation.history[navigation.index].url,
})
const mapDispatchToProps = { replaceTop }

export default
  connect(mapStateToProps, mapDispatchToProps)(
  createOrchestrator('getting-started')(
  StylingIndex))

const styles = {
  base: {},
}
