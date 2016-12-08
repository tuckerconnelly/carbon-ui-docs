import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native-universal'
import {
  AppBar,
  
  Colors,
  
  connectTheme,
} from 'carbon-ui'

import Index from './Index/index'
import { HomePage } from './Index/HomePage'
import Navigation from './Navigation'
import { openMenu } from './duck'

class Layout extends Component {
  state = { scrollY: 0 }
  
  componentWillReceiveProps(next) {
    const { url } = this.props
    if (url !== next.url) {
      // Wait for fade transition, kinda hacky
      setTimeout(() => this._scrollView.scrollTo({ x: 0, y: 0, animated: false }), 112)
    }
  }
  
  _scrollView = null
  
  _updateScrollY = e => {
    this.setState({ scrollY: e.nativeEvent.contentOffset.y })
  }

  render() {
    const { title, url, openMenu, children } = this.props
    const { scrollY } = this.state
        
    return (
      <View style={styles.base}>
        <AppBar
          title={title}
          elevated={url !== '' || scrollY > HomePage.HEADER_HEIGHT}
          onNavIconPress={openMenu} />
        <Navigation />
        <ScrollView
          scrollEventThrottle={50}
          ref={c => this._scrollView = c}
          onScroll={this._updateScrollY}>
          <Index />
        </ScrollView>
        {children}
      </View>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  
  // connect
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  
  openMenu: PropTypes.func.isRequired,
}

const mapStateToProps = ({ app, navigation }) => ({
  menuOpen: app.menuOpen,
  url: navigation.history[navigation.index].url,
  title: navigation.history[navigation.index].title,
})

const mapDispatchToProps = { openMenu }

export default
  connectTheme(
  connect(mapStateToProps, mapDispatchToProps)(
  Layout))

const styles = {
  base: {
    flex: 1,
    
    backgroundColor: Colors.white,
  },
}
