import React, { Component, PropTypes } from 'react'
import { View } from 'react-native-universal'
import { Display1, Body1, connectTheme, gu } from 'carbon-ui'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'
import Content from 'src/modules/common/Content'
import IC from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'

class RelatedLibraries extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Related libraries</Display1>
        <Body1 style={styles.break}>
          Carbon UI was built alongside a few libraries that pair really well
          with it, especially in a universal context:
        </Body1>
        <View style={styles.smallBreak}>
          <Link
            to="https://github.com/tuckerconnelly/uranium"
            style={styles.dependencyLink}>
            uranium
          </Link>
          <Body1>
            Uranium adds cross-platform media-query support for styles. It also
            comes with an <IC>animate()</IC> method that simplifies animations.
          </Body1>
        </View>
        <View style={styles.smallBreak}>
          <Link
            to="https://github.com/tuckerconnelly/react-stack-nav"
            style={styles.dependencyLink}>
            react-stack-nav
          </Link>
          <Body1>
            react-stack-nav is a simple routing library for React Native and
            React apps. It supports back and forward buttons on Android and Web,
            deep linking, and server-side rendering. It also lets you compose
            routes declaratively.
          </Body1>
        </View>
        <View style={styles.smallBreak}>
          <Link
            to="https://github.com/tuckerconnelly/react-native-web"
            style={styles.dependencyLink}>
            tuckerconnelly/react-native-web
          </Link>
          <Body1>
            This is a fork of necolas&apos;s sweet react-native-web library. It
            adds a bunch of stuff like onLayout and NativeModules. I should
            probably hit him up about merging haha.
          </Body1>
        </View>
      </Content>
    )
  }
}

RelatedLibraries.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  createLeafOrchestrator('related-libraries')(
  connectTheme(
  RelatedLibraries))

const tStyles = theme => ({
  break: {
    marginBottom: 8 * gu,
  },
  
  smallBreak: {
    marginBottom: 4 * gu,
  },
  
  display1: {
    marginBottom: 5 * gu,
    
    color: theme.colors.primary,
  },
})
