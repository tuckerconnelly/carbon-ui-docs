import React, { Component, PropTypes } from 'react'
import { Animated, View, Platform } from 'react-native-universal'
import { Animations } from 'carbon-ui'
import { animate } from 'uranium'

class Route extends Component {
  state = { visible: this.props.active }
  
  componentWillReceiveProps(next) {
    const { active } = this.props
    if (active && !next.active) {
      Animations.standard(this._activateAV, {
        duration: 112,
        toValue: 0,
        useNativeDriver: Platform.OS === 'android',
      }).start(() => this.setState({ visible: false }))
    } else if (!active && next.active) {
      this.setState({ visible: true }, () =>
        Animations.standard(this._activateAV, {
          duration: 225,
          delay: 112,
          useNativeDriver: Platform.OS === 'android',
        }).start()
      )
    }
  }
  
  _activateAV = new Animated.Value(this.props.active ? 1 : 0)
  
  render() {
    if (!this.state.visible) return <View />
    
    return (
      <Animated.View style={animate('opacity', 0, 1, this._activateAV)}>
        {this.props.children}
      </Animated.View>
    )
  }
}

Route.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
}

export default Route
