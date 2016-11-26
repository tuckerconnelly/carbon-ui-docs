import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Divider, Headline, Display1, Body1, Body2, Colors, connectTheme, gu } from 'carbon-ui'
import { pushState } from 'react-stack-nav'

import CodeBlock, { InlineCodeBlock as ICB } from 'src/modules/common/CodeBlock'
import Link from 'src/modules/common/Link'
import Content from 'src/modules/common/Content'

class Motion extends Component {
  render() {
    const styles = tStyles(this.props.theme)
    
    return (
      <Content style={styles.base}>
        <Display1 style={styles.display1}>Motion</Display1>
        <Body1 style={styles.break}>
          Motion is a
          <Link to="https://material.google.com/motion/material-motion.html">
            complex and layered
          </Link>
          subject in Material Design. Carbon UI does its best to simplify the
          creation of Animations for you.
        </Body1>
        
        <Headline style={styles.headline}>The Animations object</Headline>
        
        <Body1 style={styles.smallBreak}>
          Material Design motion boils down to <Body2>six animation types</Body2>:
        </Body1>
        
        <Body1>
          <Body2>standard</Body2> - For transitions within screen bounds. 80% of
          your animations will be this.
        </Body1>
        <Body1>
          <Body2>large</Body2> - For large transitions, such as when switching
            routes.
        </Body1>
        <Body1>
          <Body2>entrance</Body2> - For when material transitions onto the screen
        </Body1>
        <Body1>
          <Body2>exit</Body2> - For when material permanently exits the screen
        </Body1>
        <Body1 style={styles.smallBreak}>
          <Body2>tempExit</Body2> - For when material temporarily exits the screen
        </Body1>
        
        <Body1>
          All of these can be used on the <ICB>Animations</ICB> object like so:
        </Body1>
        
        <CodeBlock>{`
        import { Animations } from 'carbon-ui'
        
        class MyComponent extends Component {
          componentDidMount() {
            Animations.standard(this._showAV).start()
          }
          
          _showAV = new Animated.Value(0)
          
          return (
            <View
              style={{
                height: Animated.interpolation({
                  inputRange: [0, 1],
                  outputRange: [100, 200],
                }),
                width: Animated.interpolation({
                  inputRange: [0, 1],
                  outputRange: [100, 200],
                }),
              }} />
          )
        }
        `}</CodeBlock>
      
        <Body1 style={styles.smallBreak}>
          <ICB>Animations.standard()</ICB> creates an <ICB>Animated.timing()</ICB>
          automatically, with the proper duration and easing, and goes from
          0 to 1.
        </Body1>
        
        <Body1 style={styles.smallBreak}>
          Then we have to interpolate the value to get the actual width/height
          that we want.
        </Body1>
        
        <Body1 style={styles.smallBreak}>
          In the end the component above animates from
          <ICB>width: 100, height: 100</ICB> to <ICB>width: 200, height: 200</ICB>
        </Body1>
        
        <Body1 style={styles.smallBreak}>
          If we wanted to go back to the starting value, we could do a standard
          animation back to <ICB>0</ICB>:
        </Body1>
        
        <CodeBlock>{`
        Animations.standard(this._showAV, 0).start()
        `}</CodeBlock>
      
        <Body1>
          <ICB>Animations.large()</ICB>, <ICB>Animations.entrance()</ICB>, and the
          rest are all available on the <ICB>Animations</ICB> object. They all
          follow the signature:
        </Body1>
        
        <CodeBlock>{`
        Animations.standard(AnimatedValue, toValue, duration, delay)
        `}</CodeBlock>
  
        <Body1>
          So if you wanted to do an <ICB>exit</ICB> animation with a duration of 200ms,
          delayed by 50ms, you could do:
        </Body1>
        
        <CodeBlock style={styles.break}>{`
        Animations.exit(this._exitAV, 1, 200, 50).start()
        `}</CodeBlock>
      
        <Divider style={styles.break} />
      
        <Headline style={styles.headline}>Staggered animations</Headline>
        
        <Body1 style={styles.smallBreak}>
          Material Design also likes to
          <Link to="">
            stagger animations
          </Link> by ~50 ms or so in complex
          transitions. Carbon UI has the special <ICB>staggered</ICB> animation
          for these. It has the signature:
        </Body1>
        
        <CodeBlock>{`
        Animations.staggered(firstAnimatedValue, secondAnimatedValue, toValue, duration, staggerAmount)
        `}</CodeBlock>
      
        <Body1>
          So a real-world sweg staggered transition might look like:
        </Body1>
        
        <CodeBlock>{`
        import { Animations } from 'carbon-ui'
        
        class MyComponent extends Component {
          componentDidMount() {
            Animations.staggered(this._av1, this._av2).start()
          }
          
          _av1 = new Animated.Value(0)
          _av2 = new Animated.Value(0)
          
          return (
            <View
              style={{
                animate('height', 100, 200, this._av1),
                animate('top', 40, 50, this._av1),
              }}>
              <View style={animate('opacity', 0, 1, this._av2)}>
                <Text>Content</Text>
              </View>
            </View>
          )
        }
        `}</CodeBlock>
  
        <Body1 style={styles.break}>
          The the <ICB>animate()</ICB> method above comes from Uranium. Uranium
          integrates nicely with Carbon UI to really simplify animations. You
          can read more about <ICB>animate()</ICB>
          <Link to="">
            over here
          </Link>.
        </Body1>
        
        <Divider style={styles.break} />
        
        <Headline style={styles.headline}>Nitty gritty customization</Headline>
        
        <Body1>
          Carbon UI also has a <ICB>Durations</ICB> object and an
          <ICB>Easing</ICB> object if you want to build your own to-spec
          animations. You can read about them in the
          <Link to="">
            source
          </Link>.
        </Body1>
      </Content>
    )
  }
}

Motion.propTypes = {
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connect(null, { pushState })(
  connectTheme(
  Motion))

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
  
  captionLink: {
    color: Colors.lightBlue400,
  },
})
