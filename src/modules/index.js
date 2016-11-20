import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native-universal'
import ps from 'react-native-ps'
import { pushState } from 'react-stack-nav'
import { AppBar, NavigationDrawer, List, ListItem, Colors } from 'carbon-ui'

import Index from './Index/index'
import { HomePage } from './Index/HomePage'
import { openMenu, closeMenu } from './duck'

class Layout extends Component {
  state = { scrollY: 0 }
  
  _navigate = to => {
    this.props.closeMenu()
    this.props.pushState(0, 0, to)
  }
  
  _updateScrollY = e => {
    this.setState({ scrollY: e.nativeEvent.contentOffset.y })
  }

  render() {
    const { menuOpen, title, url, openMenu, closeMenu, children } = this.props
        
    return (
      <View style={styles.base}>
        <AppBar
          title={title}
          elevated={url !== '' || this.state.scrollY > HomePage.HEADER_HEIGHT}
          onLeftIconPress={openMenu} />
        <NavigationDrawer
          open={menuOpen}
          onOverlayPress={closeMenu}>
          <List style={styles.list}>
            <ListItem
              primaryText="Home"
              active={url === ''}
              onPress={() => this._navigate('')} />
            <ListItem
              primaryText="Installation"
              active={url === '/installation'}
              onPress={() => this._navigate('/installation')} />
          </List>
        </NavigationDrawer>
        <ScrollView
          style={styles.content}
          scrollEventThrottle={50}
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
  menuOpen: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
}

const mapStateToProps = ({ app, navigation }) => ({
  menuOpen: app.menuOpen,
  url: navigation.history[navigation.index].url,
  title: navigation.history[navigation.index].title,
})

const mapDispatchToProps = { openMenu, closeMenu, pushState }

export default
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(
  Layout)

const styles = ps({
  base: {
    flex: 1,
    
    backgroundColor: Colors.white,
  },


  // Account for iOS header
  ios: {
    list: {
      paddingTop: 24,
    },
  },
})
