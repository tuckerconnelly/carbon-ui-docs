import React, { Component, PropTypes } from 'react'
import { Display1, Body1, connectTheme, gu } from 'carbon-ui'

import createLeafOrchestrator from 'src/modules/common/createLeafOrchestrator'

import Link from 'src/modules/common/Link'
import CodeBlock from 'src/modules/common/CodeBlock'
import IC from 'src/modules/common/InlineCode'
import Content from 'src/modules/common/Content'

class Exponent extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Usage with Exponent</Display1>
        <Body1>
          Yup, it works. You just need to make sure the <IC>Roboto</IC> fonts are
          available. Your root App component might look like this:
        </Body1>
        <CodeBlock style={styles.smallBreak}>{`
          class App extends Component { // eslint-disable-line react/prefer-stateless-function
            static propTypes = {
              children: PropTypes.node,
            }

            state = { fontsLoaded: false }

            async componentWillMount() {
              await Font.loadAsync({
                'MaterialIcons-Regular': require('./assets/fonts/MaterialIcons-Regular.ttf'),
                'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
                'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
                'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
                'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
                'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
                'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
                'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
                'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
                'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
                'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
                'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
                'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
              })

              this.setState({ fontsLoaded: true })
            }

            render() {
              return (
                <Provider store={store}>
                  <ThemeProvider theme={theme}>
                    {this.state.fontsLoaded ?
                      <Layout>
                        {this.props.children}
                      </Layout> :
                      <View />
                    }
                  </ThemeProvider>
                </Provider>
              )
            }
          }
        `}</CodeBlock>
        <Body1>
          You can copy all the fonts from
          <Link to="https://github.com/tuckerconnelly/carbon-ui-docs/tree/master/android/app/src/main/assets/fonts">
            here
          </Link>.
        </Body1>
      </Content>
    )
  }
}

Exponent.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  createLeafOrchestrator('exponent')(
  connectTheme(
  Exponent))

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
})
