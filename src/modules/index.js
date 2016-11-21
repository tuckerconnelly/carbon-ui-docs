import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native-universal'
import ps from 'react-native-ps'
import { pushState } from 'react-stack-nav'
import { AppBar, NavigationDrawer, List, ListItem, Colors, gu } from 'carbon-ui'

import Index from './Index/index'
import { HomePage } from './Index/HomePage'
import { openMenu, closeMenu } from './duck'

class Layout extends Component {
  state = { scrollY: 0, expandedItems: [] }
  
  _navigate = (to, title = '') => {
    this.props.closeMenu()
    this.props.pushState(0, title, to)
  }
  
  _updateScrollY = e => {
    this.setState({ scrollY: e.nativeEvent.contentOffset.y })
  }
  
  _toggleExpandedItem = name => {
    const expandedItems = [...this.state.expandedItems]
    
    const index = expandedItems.indexOf(name)
    if (index === -1) return this.setState({ expandedItems: expandedItems.concat([name]) })
    
    expandedItems.splice(index, 1)
    this.setState({ expandedItems })
  }

  render() {
    const { menuOpen, title, url, openMenu, closeMenu, children } = this.props
    const { scrollY, expandedItems } = this.state
    
    return (
      <View style={styles.base}>
        <AppBar
          title={title}
          elevated={url !== '' || scrollY > HomePage.HEADER_HEIGHT}
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
              primaryText="Getting started"
              expanded={expandedItems.indexOf('gettingStarted') !== -1}
              onPress={() => this._toggleExpandedItem('gettingStarted')}>
              <ListItem
                primaryText="Installation"
                active={url === '/installation'}
                onPress={() => this._navigate('/installation', 'Installation')} />
            </ListItem>
          </List>
        </NavigationDrawer>
        <ScrollView
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
