import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'react-stack-nav'
import ps from 'react-native-ps'
import { Animated, Platform, Linking } from 'react-native-universal'
import {
  NavigationDrawer,
  TouchableRipple,
  List,
  ListItem,
  Divider,
  
  Headline,
  Body1,
  
  Animations,
  Colors,
  connectTheme,
  gu,
} from 'carbon-ui'
import { animate } from 'uranium'

import componentDocs from 'src/modules/Index/Components/docs'
import { closeMenu } from 'src/modules/duck'

const AnimatedList = Animated.createAnimatedComponent(List)
const NESTING_DEPTH = 12 * gu

class Navigation extends Component {
  state = { expandedItems: [], finishedOpening: false }
  
  _navigate = (to, title = '') => {
    this.props.closeMenu()
    this.props.pushState(0, title, to)
  }
  
  _toggleExpandedItem = name => {
    const expandedItems = [...this.state.expandedItems]
    
    const index = expandedItems.indexOf(name)
    if (index === -1) return this.setState({ expandedItems: expandedItems.concat([name]) })
    
    expandedItems.splice(index, 1)
    this.setState({ expandedItems })
  }
  
  _openExternalLink = url => Linking.openURL(url)
  
  _contentAV = new Animated.Value(this.props.menuOpen ? 1 : 0)
  _fadeInContent = () => {
    this.setState({ contentVisible: true }, () =>
      Animations.entrance(this._contentAV, { useNativeDriver: true }).start()
    )
  }
  _hideContent = () => new Promise(resolve =>
    this.setState({ contentVisible: false }, () => {
      this._contentAV.setValue(0)
      resolve()
    })
  )
  
  render() {
    const { url, theme, menuOpen, closeMenu, ...other } = this.props
    const { expandedItems, contentVisible } = this.state
    
    const styles = tStyles(theme)
    // PERFORMANCE OPTIMIZATION Disable list animations on android
    const ListComponent = Platform.OS === 'android' ? List : AnimatedList
    
    return (
      <NavigationDrawer
        onFinishOpening={this._fadeInContent}
        onStartClosing={this._hideContent}
        open={menuOpen}
        onOverlayPress={closeMenu}
        {...other}>
        <TouchableRipple
          rippleColor={Colors.white}
          style={styles.listHeading}
          onPress={() => this._navigate('')}>
          <Headline style={styles.listHeadingText}>Carbon UI</Headline>
        </TouchableRipple>
        {contentVisible &&
          <ListComponent
            style={[
              styles.list,
              Platform.OS !== 'android' && animate('opacity', 0, 1, this._contentAV),
            ]}>
            <ListItem
              primaryText="Getting started"
              expanded={expandedItems.indexOf('getting-started') !== -1}
              nestingDepth={NESTING_DEPTH}
              onPress={() => this._toggleExpandedItem('getting-started')}>
              <ListItem
                primaryText="Installation"
                active={url === '/getting-started/installation'}
                onPress={() => this._navigate('/getting-started/installation', 'Installation')} />
              <ListItem
                primaryText="Usage with Exponent"
                active={url === '/getting-started/exponent'}
                onPress={() => this._navigate('/getting-started/exponent', 'Usage with Exponent')} />
              <ListItem
                primaryText="Known issues"
                active={url === '/getting-started/known-issues'}
                onPress={() => this._navigate('/getting-started/known-issues', 'Known issues')} />
            </ListItem>
            <ListItem
              primaryText="Styles"
              expanded={expandedItems.indexOf('styles') !== -1}
              nestingDepth={NESTING_DEPTH}
              onPress={() => this._toggleExpandedItem('styles')}>
              <ListItem
                primaryText="Theme"
                active={url === '/styles/theme'}
                onPress={() => this._navigate('/styles/theme', 'Theme')} />
              <ListItem
                primaryText="Colors"
                active={url === '/styles/colors'}
                onPress={() => this._navigate('/styles/colors', 'Colors')} />
              <ListItem
                primaryText="Responsive UI"
                active={url === '/styles/responsive'}
                onPress={() => this._navigate('/styles/responsive', 'Responsive UI')} />
              <ListItem
                primaryText="Elevation and shadows"
                active={url === '/styles/elevation'}
                onPress={() => this._navigate('/styles/elevation', 'Elevation and shadows')} />
              <ListItem
                primaryText="Typography"
                active={url === '/styles/typography'}
                onPress={() => this._navigate('/styles/typography', 'Typography')} />
              <ListItem
                primaryText="Motion"
                active={url === '/styles/motion'}
                onPress={() => this._navigate('/styles/motion', 'Motion')} />
            </ListItem>
            <ListItem
              primaryText="Components"
              expanded={expandedItems.indexOf('components') !== -1}
              nestingDepth={NESTING_DEPTH}
              onPress={() => this._toggleExpandedItem('components')}>
              {Object.keys(componentDocs.tree).sort().map(name => {
                const isComponent = componentDocs.tree[name].description
                
                if (isComponent) {
                  return (
                    <ListItem
                      key={name}
                      primaryText={name}
                      active={url === `/components/${name}`}
                      onPress={() => this._navigate(`/components/${name}`, name)} />
                  )
                }
                                
                return (
                  <ListItem
                    key={name}
                    primaryText={name}
                    expanded={expandedItems.indexOf(name) !== -1}
                    nestingDepth={NESTING_DEPTH}
                    onPress={() => this._toggleExpandedItem(name)}>
                    {Object.keys(componentDocs.tree[name]).sort().map(nestedName =>
                      <ListItem
                        key={nestedName}
                        primaryText={nestedName}
                        active={url === `/components/${nestedName}`}
                        onPress={() => this._navigate(`/components/${nestedName}`, nestedName)} />
                    )}
                  </ListItem>
                )
              })}
            </ListItem>
            <ListItem
              primaryText="Related libraries"
              active={url === '/related-libraries'}
              onPress={() => this._navigate('/related-libraries', 'Related libraries')} />
            
            <Divider />
            
            <Body1 style={styles.navigationSubheader}>
              Resources
            </Body1>
            
            <ListItem
              primaryText="GitHub"
              onPress={() => this._openExternalLink('https://github.com/tuckerconnelly/carbon-ui')} />
          </ListComponent>
        }
      </NavigationDrawer>
    )
  }
}

Navigation.propTypes = {
  // connect
  url: PropTypes.string.isRequired,
  pushState: PropTypes.func.isRequired,
  
  menuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  
  // connectTheme
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = ({ navigation, app }) => ({
  url: navigation.history[navigation.index].url,
  menuOpen: app.menuOpen,
})

const mapDispatchToProps = { pushState, closeMenu }

export default
  connect(mapStateToProps, mapDispatchToProps)(
  connectTheme(
  Navigation))

const tStyles = theme => ps({
  base: {},
  
  listHeading: {
    backgroundColor: theme.colors.primary,
    
    paddingHorizontal: 4 * gu,
    paddingTop: 2 * gu,
    paddingBottom: 2 * gu,
  },
  
  listHeadingText: {
    color: Colors.whitePrimary,
  },
  
  navigationSubheader: {
    margin: 4 * gu,
  
    color: Colors.blackSecondary,
  },


  // Account for iOS header
  ios: {
    listHeading: {
      paddingTop: 24,
    },
  },
})
