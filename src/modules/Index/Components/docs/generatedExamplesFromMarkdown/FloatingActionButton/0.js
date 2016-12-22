 import React from 'react'
 import { View } from 'react-native'
 import { FloatingActionButton, Icon, gu } from 'carbon-ui'

 export default () =>
   <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
     <FloatingActionButton style={{ marginRight: 2 * gu }}>
       <Icon name="add" style={{ color: 'white' }} />
     </FloatingActionButton>
     <FloatingActionButton accent>
       <Icon name="keyboard_voice" style={{ color: 'white' }} />
     </FloatingActionButton>
   </View>
