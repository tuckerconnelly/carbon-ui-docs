import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native-universal'
import { pushState } from 'react-stack-nav'
import Uranium from 'uranium'
import {
  Display2,
  Subheading,
  Body2,
  Body1,
  
  Paper,
  RaisedButton,
  
  Breakpoints,
  Colors,
  gu,
  
  connectTheme,
} from 'carbon-ui'

import Content from 'src/modules/common/Content'

export class HomePage extends Component {
  static HEADER_HEIGHT = 40 * gu
  
  _goToInstallation = () => this.props.pushState(0, 'Installation', '/getting-started/installation')
  
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <View style={styles.base}>
        <View style={styles.heading}>
          <Display2 style={styles.title}>Carbon UI</Display2>
          <Subheading style={styles.tagline}>
            Universal Material Design components for React Native and React
          </Subheading>
        </View>
        <Content style={styles.copy}>
          <Body1 style={styles.firstParagraph}>
            Carbon UI is a set of Material Design components that work in both
            React Native and React, making it simple to build
          </Body1>
          <Body2 style={styles.writeOnce}>write-once, run-anywhere apps</Body2>
        
          <View css={styles.cardList}>
            <Paper css={styles.card} elevation={4}>
              <Subheading style={styles.cardHeading}>Runs everywhere</Subheading>
              <Body1 style={styles.cardBody}>
                Whether you&apos;re building for iOS, android, web, or all three,
                Carbon UI runs seamlessly on on all platforms, without any platform-specific
                code.
              </Body1>
            </Paper>
            
            <Paper style={[styles.card, styles.cardMiddle]} elevation={4}>
              <Subheading style={styles.cardHeading}>Highly customizable</Subheading>
              <Body1 style={styles.cardBody}>
                Carbon UI&apos;s themes, animations, and grid-system are all very easy
                to customize and modify to your unique app.
              </Body1>
            </Paper>
            
            <Paper style={styles.card} elevation={4}>
              <Subheading style={styles.cardHeading}>Easy to use</Subheading>
              <Body1 style={styles.cardBody}>
                Simple-yet-powerful components and helpers hide all of Material Design&apos;s
                complex specifications, so you can focus on making beautiful
                cross-platform experiences.
              </Body1>
            </Paper>
          </View>
          
          <RaisedButton
            style={styles.getStarted}
            onPress={this._goToInstallation}>
            Get started
          </RaisedButton>
        </Content>
      </View>
    )
  }
}

HomePage.propTypes = {
  // connect
  pushState: PropTypes.func.isRequired,
  
  // connectTheme
  theme: PropTypes.object.isRequired,
}

const mapDispatchToProps = { pushState }

export default
  connect(null, mapDispatchToProps)(
  connectTheme(
  Uranium(
  HomePage)))

const tStyles = theme => ({
  base: {
    flex: 1,
    
    backgroundColor: Colors.white,
  },
  
  heading: {
    height: HomePage.HEADER_HEIGHT,
    
    backgroundColor: theme.primary,
  },
  
  title: {
    marginTop: 2 * gu,
    marginBottom: 4 * gu,
    
    alignSelf: 'center',
    
    color: Colors.whitePrimary,
  },
  
  tagline: {
    width: 70 * gu,
    
    alignSelf: 'center',
    
    color: Colors.whitePrimary,
    textAlign: 'center',
  },
  
  firstParagraph: {
    lineHeight: 8 * gu,
    
    textAlign: 'center',
  },
  
  writeOnce: {
    marginBottom: 8 * gu,
    
    lineHeight: 8 * gu,
    
    textAlign: 'center',
  },
  
  cardList: {
    marginBottom: 8 * gu,
    
    [Breakpoints.sm]: {
      flexDirection: 'row',
    },
  },
  
  card: {
    marginBottom: 5 * gu,
    
    flexDirection: 'column',
  
    [Breakpoints.sm]: {
      flex: 1,
      flexBasis: 50 * gu,
    },
  },
  
  cardMiddle: {
    [Breakpoints.sm]: {
      marginHorizontal: 4 * gu,
    },
  },
  
  cardHeading: {
    marginBottom: 3 * gu,
  },
  
  cardBody: {
    lineHeight: 6 * gu,
  },
  
  getStarted: {
    width: 32 * gu,
    
    alignSelf: 'center',
  },
})
