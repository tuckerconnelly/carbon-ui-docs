 import React from 'react'
 import { View } from 'react-native-universal'
 import { List, ListItem, Elevation } from 'carbon-ui'

 export default () =>
   <View style={{ ...Elevation.dp2 }}>
     <List>
       <ListItem primaryText="One" />
       <ListItem primaryText="Two" />
       <ListItem primaryText="Three" />
     </List>
   </View>
