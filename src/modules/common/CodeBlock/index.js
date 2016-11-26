import React, { PropTypes } from 'react'
import { Text, View } from 'react-native-universal'
import ps from 'react-native-ps'
import { Colors, gu } from 'carbon-ui'
import unindent from 'unindent'

const CodeBlock = ({ children, style }) =>
  <View style={[styles.base].concat([style])}>
    <Text style={styles.text}>{unindent(children, { trim: true })}</Text>
  </View>

CodeBlock.propTypes = {
  children: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default CodeBlock

const styles = ps({
  base: {
    padding: 4 * gu,
    marginVertical: 4 * gu,
    
    backgroundColor: Colors.grey200,
  },
  
  text: {
    color: Colors.blackPrimary,
    
    fontFamily: 'RobotoMono-Regular',
    fontSize: 13,
  },
  
  web: {
    text: {
      whiteSpace: 'pre-wrap',
    },
  },
})
