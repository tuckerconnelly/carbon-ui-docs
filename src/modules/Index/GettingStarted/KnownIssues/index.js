import React, { Component, PropTypes } from 'react'
import { Platform } from 'react-native-universal'
import { Divider, Display1, Headline, Body1, Body2, connectTheme, gu } from 'carbon-ui'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'
import CodeBlock from 'src/modules/common/CodeBlock'

class Components extends Component {
  render() {
    const styles = tStyles(this.props.theme)

    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Known issues</Display1>
        <Body1 style={styles.break}>
          There are a few issues currently with carbon-ui.
        </Body1>

        <Headline style={styles.headline}>Performance</Headline>
        <Body1 style={styles.smallBreak}>
          Carbon UI leans pretty heavily on the{' '}
          <Link to="https://facebook.github.io/react-native/docs/animated.html">
            Animated API
          </Link>{' '}
          to make its pretty animations and transitions cross-platform.
          Unfortunately, the Animated API is pretty slow
          {Platform.OS !== 'ios' && ' , particularly on Android'}.
        </Body1>
        <Body1 style={styles.smallBreak}>
          The React Native team is doing{' '}
          <Link to="https://productpains.com/post/react-native/offload-some-animations-from-js-thread-for-better-perf">
          some good work
          </Link>{' '}
          to speed it up behind the scenes.
        </Body1>
        <Body1 style={styles.smallBreak}>
          Carbon UI also uses native animations wherever it can, and gracefully
          degrades to non-animated components when that&apos;s not enough.
        </Body1>
        <Body1 style={styles.smallBreak}>
          You may need to do some tweaking on your end, though.
        </Body1>

        <Body2 style={styles.smallBreak}>Performance tips</Body2>
        <Body1 style={styles.listItem}>
          • Use{' '}
          <Link to="https://github.com/facebook/react-native/pull/6466#issuecomment-212606740">
            native animations
          </Link>{' '}
          wherever you can
        </Body1>
        {Platform.OS !== 'ios' &&
          <Body1 style={styles.listItem}>
            • Use{' '}
            <Link to="https://facebook.github.io/react-native/docs/view.html#rendertohardwaretextureandroid">
              renderToHardwareTextureAndroid
            </Link>{' '}
            wherever you can
          </Body1>
        }
        <Body1 style={styles.listItem}>
          • For big transitions (like the NavigationDrawer) render as few
          components as possible while the transition is happening, and then
          add them in when it&apos;s over
        </Body1>
        <Body1 style={styles.break}>
          • Avoid{' '}
          <Link to="https://facebook.github.io/react/docs/react-api.html#cloneelement">
            React.cloneElement()
          </Link>
        </Body1>

        {Platform.OS !== 'ios' &&
          <Body1>
            Those should take care of 80% of your performance problems. If you
            still need a little more oomph, check out{' '}
            <Link to="https://facebook.github.io/react/docs/perf.html">
              Performance Tools
            </Link>{' '}
            and{' '}
            <Link to="https://facebook.github.io/react-native/docs/android-ui-performance.html">
              Profiling Android UI Performance
            </Link>.
          </Body1>
        }

        <Divider style={styles.divider} />

        <Headline style={styles.headline}>React Native 0.37 only</Headline>
        <Body1>
          Currently carbon-ui only works with react-native 0.37. You can
          create a new project with this version using:
        </Body1>
        <CodeBlock style={styles.smallBreak}>
          react-native init MyApp --version react-native@0.37.0
        </CodeBlock>
        <Body1>We're working on getting the latest version working :)</Body1>
      </Content>
    )
  }
}

Components.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  createLeafOrchestrator('installation')(
  connectTheme(
  Components))

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

  listItem: {
    marginBottom: 2 * gu,
  },

  divider: {
    marginVertical: 4 * gu,
  },
})
