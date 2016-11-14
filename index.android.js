import { AppRegistry } from 'react-native'
import matchMedia from 'react-native-match-media'

import App from './src/index'

global.matchMedia = matchMedia

AppRegistry.registerComponent('CarbonUIDocs', () => App)
