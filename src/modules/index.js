import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native-universal'
import ps from 'react-native-ps'
import { pushState } from 'react-stack-nav'
import {
  AppBar,
  NavigationDrawer,
  TouchableRipple,
  List,
  ListItem,
  
  Headline,
  
  Colors,
  gu,
  
  connectTheme,
} from 'carbon-ui'

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
    const { menuOpen, title, url, openMenu, closeMenu, theme, children } = this.props
    const { scrollY, expandedItems } = this.state
    
    const styles = tStyles(theme)
    
    return (
      <View style={styles.base}>
        <AppBar
          title={title}
          elevated={url !== '' || scrollY > HomePage.HEADER_HEIGHT}
          onLeftIconPress={openMenu} />
        <NavigationDrawer
          open={menuOpen}
          onOverlayPress={closeMenu}>
          <TouchableRipple rippleColor={Colors.white} onPress={() => this._navigate('')}>
            <View style={styles.listHeading}>
              <Headline style={styles.listHeadingText}>Carbon UI</Headline>
            </View>
          </TouchableRipple>
          <List style={styles.list}>
            <ListItem
              primaryText="Installation"
              active={url === '/installation'}
              onPress={() => this._navigate('/installation', 'Installation')} />
            <ListItem
              primaryText="Styling"
              expanded={expandedItems.indexOf('styling') !== -1}
              onPress={() => this._toggleExpandedItem('styling')}>
              <ListItem
                primaryText="Theming"
                active={url === '/styling/theming'}
                onPress={() => this._navigate('/styling/theming', 'Theming')} />
              <ListItem
                primaryText="Colors"
                active={url === '/styling/colors'}
                onPress={() => this._navigate('/styling/colors', 'Colors')} />
              <ListItem
                primaryText="Responsive"
                active={url === '/styling/responsive'}
                onPress={() => this._navigate('/styling/responsive', 'Responsive UI')} />
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
  
  // connectTheme
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = ({ app, navigation }) => ({
  menuOpen: app.menuOpen,
  url: navigation.history[navigation.index].url,
  title: navigation.history[navigation.index].title,
})

const mapDispatchToProps = { openMenu, closeMenu, pushState }

export default
  connectTheme(
  connect(mapStateToProps, mapDispatchToProps)(
  Layout))

const tStyles = theme => ps({
  base: {
    flex: 1,
    
    backgroundColor: Colors.white,
  },
  
  listHeading: {
    backgroundColor: theme.primary,
    
    paddingHorizontal: 4 * gu,
    paddingTop: 2 * gu,
    paddingBottom: 2 * gu,
  },
  
  listHeadingText: {
    color: Colors.whitePrimary,
  },


  // Account for iOS header
  ios: {
    listHeading: {
      paddingTop: 24,
    },
  },
})
