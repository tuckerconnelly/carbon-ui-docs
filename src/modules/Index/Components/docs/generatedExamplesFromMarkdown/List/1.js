 import React, { Component } from 'react'
 import { View } from 'react-native-universal'
 import { List, ListItem, Elevation, gu } from 'carbon-ui'

 export default class Example extends Component {
   state = { expandedItems: [] }

   _toggleExpandedItem = name => {
     const expandedItems = [...this.state.expandedItems]

     const index = expandedItems.indexOf(name)
     if (index === -1) return this.setState({ expandedItems: expandedItems.concat([name]) })

     expandedItems.splice(index, 1)
     this.setState({ expandedItems })
   }

   render() {
     return (
       <View style={{ ...Elevation.dp2 }}>
         <List>
           <ListItem
             primaryText="Nested item"
             expanded={this.state.expandedItems.indexOf('nestedItem') !== -1}
             onPress={() => this._toggleExpandedItem('nestedItem')}>
             <ListItem primaryText="Nested one" style={styles.nestedItem} />
             <ListItem primaryText="Nested two" style={styles.nestedItem} />
           </ListItem>
           <ListItem primaryText="Item two" />
           <ListItem primaryText="Item three" />
         </List>
       </View>
     )
   }
 }

 const styles = {
   nestedItem: { paddingLeft: 18 * gu },
 }
