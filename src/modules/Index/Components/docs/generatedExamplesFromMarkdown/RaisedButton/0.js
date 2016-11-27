 import React from 'react'
 import { View } from 'react-native-universal'
 import { RaisedButton } from 'carbon-ui'

 export default () =>
   <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
     <RaisedButton>Click me!</RaisedButton>
     <RaisedButton disabled>Out of commission</RaisedButton>
   </View>
