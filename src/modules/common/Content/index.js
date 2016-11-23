import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import { Breakpoints, Colors, gu } from 'carbon-ui'
import Uranium from 'uranium'

const Content = ({ children, ...other }) =>
  <View css={styles.base} {...other}>
    {children}
  </View>

Content.propTypes = {
  children: PropTypes.node,
}

export default
  Uranium(
  Content)

const styles = {
  base: {
    maxWidth: 190 * gu,
    paddingHorizontal: 4 * gu,
    paddingTop: 4 * gu,
    paddingBottom: 10 * gu,
    
    flex: 1,
    alignSelf: 'center',
    
    backgroundColor: Colors.white,
    
    [Breakpoints.ml]: {
      maxWidth: 290 * gu,
    },
  },
}
