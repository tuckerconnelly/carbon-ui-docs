import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import { Colors, gu } from 'carbon-ui'
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
    paddingHorizontal: 4 * gu,
    paddingTop: 4 * gu,
    paddingBottom: 10 * gu,
    
    flex: 1,
    alignSelf: 'stretch',
    
    backgroundColor: Colors.white,
    
    [`@media (min-width: ${190 * gu}px)`]: {
      width: 190 * gu,
      
      alignSelf: 'center',
    },
    
    [`@media (min-width: ${290 * gu}px)`]: {
      flexBasis: 290 * gu,
      
      alignSelf: 'center',
    },
  },
}
