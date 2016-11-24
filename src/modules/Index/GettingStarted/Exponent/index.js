import React, { Component, PropTypes } from 'react'
import { Display1, Body1, connectTheme, gu } from 'carbon-ui'
import CodeBlock, { InlineCodeBlock as ICB } from 'src/modules/common/CodeBlock'
import Content from 'src/modules/common/Content'

class Components extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Usage with Exponent</Display1>
        <Body1>
          Yup, it works. Just create a matchMedia mock in your <ICB>main.js</ICB>:
        </Body1>
        <CodeBlock>{`
        global.matchMedia = { addListener() {}, removeListener() {} }
        `}</CodeBlock>
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
    
    color: theme.primary,
  },
})
