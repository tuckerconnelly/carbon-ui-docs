import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native-universal'
import { Display1, Body1, Colors as CUIColors, connectTheme, gu } from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import CodeBlock, { InlineCodeBlock } from 'src/modules/common/CodeBlock'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Colors extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Colors</Display1>
        <Body1 style={styles.smallBreak}>
          Material Design has a vibrant palette of
          <Link to="https://material.google.com/style/color.html">
            recommended colors
          </Link>
          to use in your app.
        </Body1>
        <Body1 style={styles.smallBreak}>
          Carbon UI makes it easy to use these with the
          <Link to="https://github.com/tuckerconnelly/carbon-ui/blob/master/src/styles/Colors.js">
            Colors object.
          </Link>
        </Body1>
        <Body1>
          You can use it like so:
        </Body1>
        <CodeBlock style={styles.smallBreak}>{`
        import { Colors } from 'carbon-ui'
        
        const MyComponent () =>
          <View style={{ backgroundColor: Colors.orange400 }} />
        `}</CodeBlock>
        
        <Body1>
          Obv you&apos;d wanna use your
          <Text
            style={styles.link}
            onPress={() => this.props.pushState(0, 0, '/styling/theming')}>
            {' '}theme{' '}
          </Text>
          for any theme colors, but for one-off styles, the
          <InlineCodeBlock>Colors</InlineCodeBlock> object works great.
        </Body1>
      </Content>
    )
  }
}

Colors.propTypes = {
  // connect
  pushState: PropTypes.func.isRequired,
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connect(null, { pushState })(
  connectTheme(
  Colors))

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
  
  link: {
    color: CUIColors.lightBlue400,
  },
})
