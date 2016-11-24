import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import { createOrchestrator } from 'react-stack-nav'

import Route from 'src/modules/common/Route'
import HomePage from './HomePage'
import GettingStarted from './GettingStarted'
import Styles from './Styles'

const Index = ({ routeFragment }) =>
  <View style={styles.base}>
    <Route active={routeFragment === ''}><HomePage /></Route>
    <Route active={routeFragment === 'getting-started'}><GettingStarted /></Route>
    {routeFragment === 'styles' && <Styles />}
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
