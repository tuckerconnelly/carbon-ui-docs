import React from 'react'
import { AppRegistry, View } from 'react-native'

import App from './src/index'

global.matchMedia = () => ({ addEventListener() {}, removeEventListener() {} })

AppRegistry.registerComponent('CarbonUIDocs', () => App);
