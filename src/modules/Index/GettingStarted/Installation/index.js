import React, { Component, PropTypes } from 'react'
import { View, Platform } from 'react-native-universal'
import { Display1, Headline, Body1, Body2, Divider, connectTheme, gu } from 'carbon-ui'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'
import CodeBlock from 'src/modules/common/CodeBlock'
import InlineCode from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Installation extends Component {
  render() {
    const styles = tStyles(this.props.theme)

    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Installation</Display1>
        <Body1>
          You'll need to install the tuckerconnelly/carbon-ui package using npm:
        </Body1>
        <CodeBlock style={styles.break}>npm -S i tuckerconnelly/carbon-ui</CodeBlock>

        <Headline style={styles.headline}>Peer dependencies</Headline>
        <Body1 style={styles.smallBreak}>
          Because Carbon UI supports multiple platforms, you may need to install
          a few peer dependencies.
        </Body1>
        <View style={styles.smallBreak}>
          <Link
            to="https://github.com/facebook/react-native"
            style={styles.dependencyLink}>
            react-native
          </Link>
          <Body1>If you want to run carbon-ui natively.</Body1>
        </View>
        <View style={styles.smallBreak}>
          <Link
            to="https://github.com/necolas/react-native-web"
            style={styles.dependencyLink}>
            react-native-web
          </Link>
          <Body1>If you want to run carbon-ui in the web</Body1>
        </View>
        <View style={styles.break}>
          <Link
            to="https://github.com/tuckerconnelly/react-native-match-media"
            style={styles.dependencyLink}>
            react-native-match-media
          </Link>
          <Body1>
            If you want carbon-ui to adjust styles for screen size on native
            platforms. This lib also has a peer dependency on{' '}
            <Link to="https://github.com/walmartlabs/react-native-orientation-listener">
              react-native-orientation-listener
            </Link>.
          </Body1>
          <Body1>
            You need to set <InlineCode>global.matchMedia</InlineCode>
            in your <InlineCode>index</InlineCode> file like:
          </Body1>
          <CodeBlock>{`
          import matchMedia from 'react-native-match-media'
          global.matchMedia = matchMedia
          `}</CodeBlock>
        </View>

        <Divider style={styles.break} />

        <Headline style={styles.headline}>Fonts</Headline>
        <Body1 style={styles.smallBreak}>
          Material Design uses the Roboto font family, so for everything to work
          properly and things to look sweg, you'll need to install it on all
          the platforms you're supporting.
        </Body1>
        <Body2>Web</Body2>
        <Body1>
          Installing the fonts on web is as simple as putting the
          <InlineCode>{'<WebStyles />'}</InlineCode> component in your
          top-level component:
        </Body1>
        <CodeBlock style={styles.smallBreak}>{`
        import React from 'React'
        import { WebStyles } from 'carbon-ui'

        const App = () =>
          <View>
            {/* The rest of the app */}
            <WebStyles />
          </View>

        export default App
        `}</CodeBlock>
        {/* Can't mention Android on iOS :/ */}
        {Platform.OS !== 'ios' &&
          <View>
            <Body2>Android</Body2>
            <Body1>
              Android's pretty simple--just gotta put all the fonts in the
              <InlineCode>android/app/src/main/assets/fonts</InlineCode>
              folder and they'll automatically be usable by the app.
            </Body1>
            <Body1 style={styles.smallBreak}>
              You can grab all the Roboto fonts from{' '}
              <Link to="https://github.com/tuckerconnelly/carbon-ui-docs/tree/master/android/app/src/main/assets/fonts">
                this app's repo
              </Link>.
            </Body1>
          </View>
        }
        <Body2>iOS</Body2>
        <Body1>
          iOS is a little more complicated.
          You'll need all the Roboto fonts, which you can get from{' '}
          <Link to="https://github.com/tuckerconnelly/carbon-ui-docs/tree/master/android/app/src/main/assets/fonts">
            this app's repo
          </Link>.{' '}
          Once you have them, use{' '}
          <Link to="https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f#.shz3o3lwp">
            this guide
          </Link>{' '}to get them all installed.
        </Body1>
      </Content>
    )
  }
}

Installation.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  createLeafOrchestrator('installation')(
  connectTheme(
  Installation))

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

  headline: {
    marginBottom: 4 * gu,

    color: theme.colors.primary,
  },

  dependencyLink: {
    marginHorizontal: 0,
  },
})
