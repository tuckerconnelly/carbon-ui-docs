import React, { Component, PropTypes } from 'react'
import { View } from 'react-native-universal'
import { Display1, Headline, Body1, Body2, Divider, connectTheme, gu } from 'carbon-ui'
import CodeBlock from 'src/modules/common/CodeBlock'
import InlineCode from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Components extends Component {
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
          <Body1>If you want to run carbon-ui in iOS or Android</Body1>
        </View>
        <View style={styles.smallBreak}>
          <Link
            to="https://github.com/tuckerconnelly/react-native-web"
            style={styles.dependencyLink}>
            tuckerconnelly/react-native-web
          </Link>
          <Body1>If you want to run carbon-ui in the web</Body1>
        </View>
        <View style={styles.smallBreak}>
          <Link
            to="https://github.com/tuckerconnelly/react-native-universal"
            style={styles.dependencyLink}>
            react-native-universal
          </Link>
          <Body1>If you want to run carbon-ui on all 3 platforms</Body1>
        </View>
        <View style={styles.break}>
          <Link
            to="https://github.com/tuckerconnelly/react-native-match-media"
            style={styles.dependencyLink}>
            react-native-match-media
          </Link>
          <Body1>
            If you want carbon-ui to adjust styles for screen size on iOS and
            Android. This lib also has a peer dependency on
            <Link to="https://github.com/walmartlabs/react-native-orientation-listener">
              react-native-orientation-listener
            </Link>.
          </Body1>
          <Body1>
            You need to set <InlineCode>global.matchMedia</InlineCode>
            in your <InlineCode>index.ios.js</InlineCode> or
            <InlineCode>index.android.js</InlineCode> file like:
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
        <Body2>Android</Body2>
        <Body1>
          Android's pretty simple--just gotta put all the fonts in the
          <InlineCode>android/app/src/main/assets/fonts</InlineCode>
          folder and they'll automatically be usable by the app.
        </Body1>
        <Body1 style={styles.smallBreak}>
          You can grab all the Roboto fonts from
          <Link to="https://github.com/tuckerconnelly/carbon-ui-docs/tree/master/android/app/src/main/assets/fonts">
            this app's repo.
          </Link>
        </Body1>
        <Body2>iOS</Body2>
        <Body1>
          iOS is a little more complicated than Android (thanks Apple).
          You'll need all the Roboto fonts, which you can get from
          <Link to="https://github.com/tuckerconnelly/carbon-ui-docs/tree/master/android/app/src/main/assets/fonts">
            this app's repo.
          </Link>
          Once you have them, use this guide to get them all installed.
        </Body1>
      </Content>
    )
  }
}

Components.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  Components)

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
