/* eslint-disable no-bitwise */
import React, { Component, PropTypes } from 'react'
import { Animated, View } from 'react-native-universal'
import { createOrchestrator } from 'react-stack-nav'
import { Animations } from 'carbon-ui'
import { animate } from 'uranium'

import HomePage from './HomePage'
import Installation from './Installation'

class Route extends Component {
  state = { visible: this.props.active }
  
  componentWillReceiveProps(next) {
    const { active } = this.props
    if (active && !next.active) {
      Animations.standard(this._activateAV, 0, 112).start(() => {
        this.setState({ visible: false })
      })
    } else if (!active && next.active) {
      this.setState({ visible: true })
      Animations.standard(this._activateAV, 1, 225, 112).start()
    }
  }
  
  _activateAV = new Animated.Value(this.props.active | 0)
  
  render() {
    if (!this.state.visible) return <View />
    
    return (
      <Animated.View
        style={animate('opacity', 0, 1, this._activateAV)}>
        {this.props.children}
      </Animated.View>
    )
  }
}

Route.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
}

const Index = ({ routeFragment }) =>
  <View style={styles.base}>
    <Route active={routeFragment === ''}><HomePage /></Route>
    <Route active={routeFragment === 'installation'}><Installation /></Route>
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
