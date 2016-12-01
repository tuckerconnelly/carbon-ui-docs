import React, { PropTypes } from 'react'
import { Linking } from 'react-native-universal'
import ps from 'react-native-ps'
import { Body1, gu, connectTheme } from 'carbon-ui'

const Link = ({ to, children, style, theme, ...other }) => {
  const styles = tStyles(theme)
  return (
    <Body1
      style={[styles.base].concat(style)}
      onPress={() => Linking.openURL(to)}
      {...other}>
      {children}
    </Body1>
  )
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  
  // connectTheme
  theme: PropTypes.object,
}

export default
  connectTheme(
  Link)

const tStyles = theme => ps({
  base: {
    color: theme.colors.primary,
  },
  
  web: {
    base: {
      cursor: 'pointer',
    },
  },
})
