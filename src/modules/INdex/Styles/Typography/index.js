import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  Subheading,
  Body2,
  Body1,
  Caption,
  
  Colors,
  gu,
  connectTheme,
} from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'
import CodeBlock from 'src/modules/common/CodeBlock'
import InlineCode from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Typography extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Typography</Display1>
        <Body1>
          Material Design has a bunch of different{' '}
          <Link to="https://material.google.com/style/typography.html#typography-styles">
            font sizes
          </Link>.{' '}
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
        <Body1 style={styles.break}>
          The rest of the font sizes are available too:
        </Body1>
        
        <Display4>&lt;Display4&gt;</Display4>
        <Display3>&lt;Display3&gt;</Display3>
        <Display2>&lt;Display2&gt;</Display2>
        <Display1>&lt;Display1&gt;</Display1>
        <Headline>&lt;Headline&gt;</Headline>
        <Title>&lt;Title&gt;</Title>
        <Subheading>&lt;Subheading&gt;</Subheading>
        <Body2>&lt;Body2&gt;</Body2>
        <Body1>&lt;Body1&gt;</Body1>
        <Caption style={styles.break}>&lt;Caption&gt;</Caption>
        
        <Headline style={styles.headline}>The Type object</Headline>
        
        <Body1>
          If you wanna add the typography styles specifically, you can
          use the <InlineCode>Type</InlineCode> object:
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
          Such is the discussion of typography in{' '}
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
  createLeafOrchestrator('typography')(
  connect(null, { pushState })(
  connectTheme(
  Typography)))

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
    color: Colors.lightBlue400,
  },
})
