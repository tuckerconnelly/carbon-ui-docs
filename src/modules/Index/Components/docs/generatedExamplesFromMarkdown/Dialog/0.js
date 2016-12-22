 import React from 'react'
 import { View } from 'react-native'
 import { Dialog, FlatButton, Body1 } from 'carbon-ui'

 export default () =>
   <View style={{ height: 300 }}>
     <Dialog
       title="Title"
       actions={[
         <FlatButton>No</FlatButton>,
         <FlatButton>Yes</FlatButton>
       ]}
       active>
       <Body1>Body of the dialog here</Body1>
      </Dialog>
   </View>
