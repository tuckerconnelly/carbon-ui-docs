import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native-universal'
import { Display1, Body1, Colors as CUIColors, connectTheme, gu } from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'
import CodeBlock from 'src/modules/common/CodeBlock'
import InlineCode from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Colors extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Colors</Display1>
        <Body1 style={styles.smallBreak}>
          Material Design has a vibrant
          <Link to="https://material.google.com/style/color.html">
            set of colors
          </Link>
          you can use in your app.
        </Body1>
        <Body1 style={styles.smallBreak}>
          You can use access these using the
          <Link to="https://github.com/tuckerconnelly/carbon-ui/blob/master/src/styles/Colors.js">
            Colors object
          </Link>:
        </Body1>
        <CodeBlock style={styles.smallBreak}>{`
        import { Colors } from 'carbon-ui'
        
        const MyComponent () =>
          <View style={{ backgroundColor: Colors.orange400 }} />
        `}</CodeBlock>
        
        <Body1>
          I recommend using your
          <Text
            style={styles.link}
            onPress={() => this.props.pushState(0, 0, '/styling/theming')}>
            {' '}theme{' '}
          </Text>
          for any theme colors, but for one-off styles the
          <InlineCode>Colors</InlineCode> object works great.
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
  createLeafOrchestrator('colors')(
  connect(null, { pushState })(
  connectTheme(
  Colors)))

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
