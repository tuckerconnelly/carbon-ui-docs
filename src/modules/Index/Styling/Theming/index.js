import React, { Component, PropTypes } from 'react'
import { Display1, Body1, Caption, Type, Colors, connectTheme, gu } from 'carbon-ui'
import CodeBlock, { InlineCodeBlock } from 'src/modules/common/CodeBlock'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Theming extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Theming</Display1>
        <Body1>
          Setting up your custom theme ain&apos;t too hard in Carbon UI.
          Just gotta set up a <InlineCodeBlock>theme</InlineCodeBlock> object:
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
          Once we got that thing set up, create a
          <InlineCodeBlock>ThemeProvider</InlineCodeBlock> at the root of your
          app, maybe next to your redux Provider if you&apos;re using redux.
        </Body1>
        
        <CodeBlock style={styles.smallBreak}>{`
        import { ThemeProvider } from 'carbon-ui'
        
        import theme from './theme.js'
          
        class App extends Component {
          render() {
            return (
              <Provider store={store}>
                <ThemeProvider theme={theme}>
                  <Layout>
                    {this.props.children}
                  </Layout>
                </ThemeProvider>
              </Provider>
            )
          }
        }
        `}</CodeBlock>
        
        <Body1>
          Boom! Now all you gotta do to use the theme is wrap a component with the
          <InlineCodeBlock>connectTheme()</InlineCodeBlock> higher-order component:
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
        
        <Body1>Now damn, that&apos;s a stylish component.</Body1>
      </Content>
    )
  }
}

Theming.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  Theming)

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
  
  captionLink: {
    ...Type.caption,
    color: Colors.lightBlue400,
  },
  
  headline: {
    marginBottom: 4 * gu,
    
    color: theme.primary,
  },
  
  dependencyLink: {
    marginHorizontal: 0,
  },
})
