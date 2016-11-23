import React, { PropTypes } from 'react'
import { Linking } from 'react-native-universal'
import ps from 'react-native-ps'
import { Body1, Colors, gu } from 'carbon-ui'

const Link = ({ to, children, style, ...other }) =>
  <Body1
    style={[styles.base].concat(style)}
    onPress={() => Linking.openURL(to)}
    {...other}>
    {' '}{children}{' '}
  </Body1>

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Link

const styles = ps({
  base: {
    marginHorizontal: 1 * gu,
    
    color: Colors.lightBlue400,
  },
  
  web: {
    base: {
      cursor: 'pointer',
    },
  },
})
