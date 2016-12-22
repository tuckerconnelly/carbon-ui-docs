 import React, { Component } from 'react'
 import { View } from 'react-native'
 import { BottomNavigation, BottomNavigationIcon, Headline } from 'carbon-ui'

 export default class BottomNavExample extends Component {
   state = { activeTab: 'Favorites' }

   _navigate = activeTab => this.setState({ activeTab })

   render() {
     const { activeTab } = this.state
     return (
       <View style={{ height: 220, overflow: 'hidden' }}>
         <View style={{ padding: 24, alignItems: 'center' }}>
           <Headline>{activeTab}</Headline>
         </View>
         <BottomNavigation>
           <BottomNavigationIcon
             name="history"
             text="Recents"
             active={activeTab === 'Recents'}
             onPress={() => this._navigate('Recents')} />
           <BottomNavigationIcon
             name="favorite"
             text="Favorites"
             active={activeTab === 'Favorites'}
             onPress={() => this._navigate('Favorites')} />
           <BottomNavigationIcon
             name="location_on"
             text="Nearby"
             active={activeTab === 'Nearby'}
             onPress={() => this._navigate('Nearby')} />
         </BottomNavigation>
       </View>
     )
   }
 }
