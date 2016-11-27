 import React from 'react'
 import { View } from 'react-native-universal'
 import { IconToggle } from 'carbon-ui'

 export default () =>
   <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
     <IconToggle name="add" />
     <IconToggle name="favorite" />
     <IconToggle name="account_circle" />
   </View>
