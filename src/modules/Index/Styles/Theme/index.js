import React, { Component, PropTypes } from 'react'
import { Divider, Headline, Display1, Body1, Caption, Type, Colors, connectTheme, gu } from 'carbon-ui'
import CodeBlock, { InlineCodeBlock } from 'src/modules/common/CodeBlock'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Theme extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Theme</Display1>
        <Body1 style={styles.smallBreak}>
          It&apos;s probably a good idea to use a consistent color scheme throughout
          your app. All of Carbon UI&apos;s components are easy themeable. You just
          need to create a <InlineCodeBlock>theme</InlineCodeBlock> object, and
          pass it down the context with a <InlineCodeBlock>ThemeProvider</InlineCodeBlock>.
        </Body1>
        <Body1>
          First, let's set up the <InlineCodeBlock>theme</InlineCodeBlock> object:
        </Body1>
        <CodeBlock style={styles.smallBreak}>{`
        import { Colors, themes } from 'carbon-ui'
        
        export default {
          ...themes.light,
          primary: Colors.lightblue400,
          // And so on
        }
        `}</CodeBlock>
        
        <Caption style={styles.smallBreak}>
          Check out the
          <Link
            to="https://github.com/tuckerconnelly/carbon-ui/blob/master/src/themes/light.js"
            style={styles.captionLink}>
            default light theme object
          </Link>
          for all the possible options.
        </Caption>
        
        <Body1>
          Next, create a <InlineCodeBlock>ThemeProvider</InlineCodeBlock> at
          the root of your app, and pass it the <InlineCodeBlock>theme</InlineCodeBlock>
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
          You can access the <InlineCodeBlock>theme</InlineCodeBlock> object in
          your own components by wrapping them in the
          <InlineCodeBlock>connectTheme()</InlineCodeBlock> higher-order component.
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
  connectTheme(
  Theme)

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
