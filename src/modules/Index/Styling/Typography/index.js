import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Display1, Headline, Body1, Colors as CUIColors, connectTheme, gu } from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import CodeBlock, { InlineCodeBlock } from 'src/modules/common/CodeBlock'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Typography extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Typography</Display1>
        <Body1>
          Material Design has a bunch of different
          <Link to="https://material.google.com/style/typography.html#typography-styles">
            font sizes
          </Link>.
          You can use these simply as components in Carbon UI like:
        </Body1>
        <CodeBlock>{`
        import { Display2, Headline, Caption } from 'carbon-ui'
        
        const MyComponent =
          <View>
            <Display2>I'm gigantic!</Display2>
            <Headline>I'm a headline!</Headline>
            <Caption>I'm small and no one cares about me.</Caption>
          </View>
        }
        `}</CodeBlock>
        <Body1 style={styles.smallBreak}>
          And the rest of the font sizes from the material design font page are
          in there, too.
        </Body1>
        
        <Headline style={styles.headline}>The Type object</Headline>
        
        <Body1>
          If you wanna add the typography styles specifically, you can
          use the <InlineCodeBlock>Type</InlineCodeBlock> object:
        </Body1>
        <CodeBlock>{`
        import { Type } from 'carbon-ui'
        
        const MyComponent =
          <View>
            <Text style={styles.customTextOne}>I'm a display 3!</Text>
            <Text style={styles.customTextTwo}>I'm a subheading</Text>
          </View>
        
        const styles = {
          customTextOne: {
            ...Type.display3,
          },
          customTextTwo: {
            ...Type.subheading,
          },
        }
        `}</CodeBlock>
        <Body1 style={styles.smallBreak}>
          Such is the discussion of typography in
          <Link to="http://classics.mit.edu/Tzu/artwar.html">
            warfare
          </Link>.
        </Body1>
      </Content>
    )
  }
}

Typography.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connect(null, { pushState })(
  connectTheme(
  Typography))

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
  
  headline: {
    marginBottom: 4 * gu,
    
    color: theme.primary,
  },
  
  link: {
    color: CUIColors.lightBlue400,
  },
})
