 import React from 'react'
 import { View } from 'react-native-universal'
 import { Paper, TouchableRipple, Body1, Colors, gu } from 'carbon-ui'

 export default () =>
   <View>
     <TouchableRipple>
       <View style={{ padding: 4 * gu }}>
         <Body1>Simple TouchableRipple</Body1>
       </View>
     </TouchableRipple>
     <TouchableRipple rippleColor={Colors.pinkA200}>
       <View style={{ padding: 4 * gu }}>
         <Body1>Colorful ripple</Body1>
       </View>
     </TouchableRipple>
   </View>
