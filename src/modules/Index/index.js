import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import { createOrchestrator } from 'react-stack-nav'

import RouteFade from 'src/modules/common/RouteFade'
import HomePage from './HomePage'
import GettingStarted from './GettingStarted'
import Styles from './Styles'
import Components from './Components'

const Index = ({ routeFragment }) =>
  <View style={styles.base}>
    <RouteFade active={routeFragment === undefined}><HomePage /></RouteFade>
    <GettingStarted />
    <Styles />
    <Components />
  </View>

Index.propTypes = {
  // createOrchestrator
  routeFragment: PropTypes.string.isRequired,
}

export default
  createOrchestrator(
  Index)

const styles = {
  base: {
    position: 'relative',
  },
}
