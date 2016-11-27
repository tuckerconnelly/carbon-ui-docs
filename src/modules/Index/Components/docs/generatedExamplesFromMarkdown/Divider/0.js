 import React from 'react'
 import { View } from 'react-native-universal'
 import { Body1, Divider, gu } from 'carbon-ui'

 export default () =>
   <View>
     <Body1>Above</Body1>
     <Divider style={{ marginVertical: 2 * gu }} />
     <Body1>Below</Body1>
   </View>
