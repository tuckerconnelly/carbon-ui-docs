import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Animated, View } from 'react-native-universal'
import { replaceState, createOrchestrator } from 'react-stack-nav'
import { Animations } from 'carbon-ui'
import { animate } from 'uranium'

import ComponentDoc from './ComponentDoc'

class ComponentsIndex extends Component {
  state = { activeComponent: this.props.routeFragment }

  componentWillMount() {
    if (this.props.url === '/components') {
      this.props.replaceState(0, 'AppBar', '/components/AppBar')
    }
  }
  
  componentWillReceiveProps(next) {
    if (this.props.routeFragment === next.routeFragment) return
    
    Animations.exit(this._showAV, 0, 112).start(() => {
      this.setState({ activeComponent: next.routeFragment }, () => {
        if (this.props.routeFragment === undefined) return
        
        Animations.entrance(this._showAV, 1, 112).start()
      })
    })
  }
  
  _showAV = new Animated.Value(this.props.routeFragment === undefined ? 0 : 1)
  
  render() {
    if (this.state.activeComponent === undefined) return <View />
    
    return (
      <Animated.View style={animate('opacity', 0, 1, this._showAV)}>
        <ComponentDoc component={this.state.activeComponent} />
      </Animated.View>
    )
  }
}

ComponentsIndex.contextTypes = {
  store: PropTypes.object,
}

ComponentsIndex.propTypes = {
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
  createOrchestrator('components')(
  ComponentsIndex))

const styles = {
  base: {},
}
