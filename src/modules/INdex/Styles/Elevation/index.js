import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Display1, Body1, Colors as CUIColors, connectTheme, gu } from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import CodeBlock from 'src/modules/common/CodeBlock'
import InlineCode from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Elevation extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Elevation and shadows</Display1>
        <Body1>
          Material rests at
          <Link to="https://material.google.com/material-design/elevation-shadows.html">
            different elevations
          </Link>.
          All components in Carbon UI implement elevation to spec, but if you want
          to add your own shadows to an element you can do so with the
          <InlineCode>Elevation</InlineCode> object:
        </Body1>
        <CodeBlock>{`
        import { Elevation } from 'carbon-ui'
        
        const MyComponent =
          <View style={styles.base} />
        
        const styles = {
          base: {
            width: 10 * gu,
            height: 10 * gu,
            
            ...Elevation.dp4,
          },
        }
        `}</CodeBlock>
        <Body1 style={styles.smallBreak}>
          This would create a <InlineCode>View</InlineCode> with an
          elevation of 4dp.
        </Body1>
        <Body1 style={styles.smallBreak}>
          The <InlineCode>Elevation</InlineCode> object has all the dps
          you see on the
          <Link to="https://material.google.com/material-design/elevation-shadows.html#elevation-shadows-elevation-android">
            Material Design elevation page
          </Link>. You could spread, for example,
          <InlineCode>...Elevation.dp16</InlineCode> in a style object
          if you wanted to set an elevation of 16dp.
        </Body1>
      </Content>
    )
  }
}

Elevation.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connect(null, { pushState })(
  connectTheme(
  Elevation))

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
