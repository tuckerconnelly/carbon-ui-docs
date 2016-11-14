import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import ps from 'react-native-ps'
import { AppBar, NavigationDrawer, List, ListItem } from 'carbon-ui'

import { openMenu, closeMenu } from 'src/app'

class Layout extends Component {
  state = { authed: false }

  render() {
    const { menuOpen, openMenu, closeMenu, children } = this.props
    return (
      <View style={styles.base}>
        <AppBar
          title="Title"
          css={styles.appBar}
          onLeftIconPress={openMenu} />
        <NavigationDrawer
          open={menuOpen}
          onOverlayPress={closeMenu}>
          <List style={styles.list}>
            <ListItem
              primaryText="AppBar"
              active />
          </List>
        </NavigationDrawer>
        {children}
      </View>
    )
  }
}

Layout.propTypes = {
  // connect
  menuOpen: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  
  children: PropTypes.node,
}

const mapStateToProps = ({ app }) => ({
  menuOpen: app.menuOpen,
})

const mapDispatchToProps = { openMenu, closeMenu }

export default
  connect(mapStateToProps, mapDispatchToProps)(
  Layout)

const styles = ps({
  base: {
    flex: 1,
  },


  // Account for iOS header
  ios: {
    list: {
      paddingTop: 24,
    },
  },
})
