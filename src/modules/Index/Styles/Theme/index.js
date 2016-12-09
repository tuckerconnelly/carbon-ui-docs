import React, { Component, PropTypes } from 'react'
import { Divider, Headline, Display1, Body1, Caption, Type, Colors, connectTheme, gu } from 'carbon-ui'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'
import CodeBlock from 'src/modules/common/CodeBlock'
import InlineCode from 'src/modules/common/InlineCode'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Theme extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Theme</Display1>
        <Body1 style={styles.smallBreak}>
          All of Carbon UI&apos;s components are themeable. You just
          need to create a <InlineCode>theme</InlineCode> object, and
          pass it down the context with a <InlineCode>ThemeProvider</InlineCode>.
        </Body1>
        <Body1>
          First, let's set up the <InlineCode>theme</InlineCode> object:
        </Body1>
        <CodeBlock style={styles.smallBreak}>{`
        import merge from 'lodash/merge'
        import { Colors, themes } from 'carbon-ui'
        
        export default merge(themes.light, {
          colors: {
            primary: Colors.lightblue400,
            // And any of the other colors in themes.light
          },
        }
        `}</CodeBlock>
        
        <Caption style={styles.smallBreak}>
          Check out the{' '}
          <Link
            to="https://github.com/tuckerconnelly/carbon-ui/blob/master/src/theme/themes/light.js"
            style={styles.captionLink}>
            default light theme object
          </Link>{' '}
          for all the possible options.
        </Caption>
        
        <Body1 style={styles.smallBreak}>
          The above code extends
          <InlineCode>themes.light</InlineCode>
          with your own custom colors.
        </Body1>
        
        <Body1>
          Next, create a <InlineCode>ThemeProvider</InlineCode> at
          the root of your app, and pass it the <InlineCode>theme</InlineCode>
          object:
        </Body1>
        
        <CodeBlock style={styles.smallBreak}>{`
        import { ThemeProvider } from 'carbon-ui'
        
        import theme from './theme.js'
          
        class App extends Component {
          render() {
            return (
              <ThemeProvider theme={theme}>
                <Layout>
                  {this.props.children}
                </Layout>
              </ThemeProvider>
            )
          }
        }
        `}</CodeBlock>
      
        <Body1 style={styles.break}>
          Wooo, all of Carbon UI&apos;s components now follow your theme
        </Body1>
        
        <Divider style={styles.break} />
        
        <Headline style={styles.headline}>Accessing the theme object</Headline>
        <Body1>
          You can access the <InlineCode>theme</InlineCode> object in
          your own components by wrapping them in the
          <InlineCode>connectTheme()</InlineCode> higher-order component.
          Once it's wrapped, the theme will be accessible as a prop:
        </Body1>
        
        <CodeBlock style={styles.smallBreak}>{`
        import { connectTheme } from 'carbon-ui'
          
        const SuperStylishComponent = ({ theme }) => {
          const styles = tStyles(theme)
          
          return (
            <View style={styles.base} />
          )
        }
        
        export default
          connectTheme(
          SuperStylishComponent)
        
        const tStyles = theme => ({
          base: {
            width: 100,
            height: 100,
            
            backgroundColor: theme.primary,
          },
        })
        `}</CodeBlock>
      </Content>
    )
  }
}

Theme.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  createLeafOrchestrator('theme')(
  connectTheme(
  Theme))

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
  
  captionLink: {
    ...Type.caption,
    color: Colors.lightBlue400,
  },
  
  headline: {
    marginBottom: 4 * gu,
    
    color: theme.colors.primary,
  },
  
  dependencyLink: {
    marginHorizontal: 0,
  },
})
