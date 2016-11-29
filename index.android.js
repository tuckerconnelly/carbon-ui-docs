import { AppRegistry } from 'react-native'
import codePush from 'react-native-code-push'
import matchMedia from 'react-native-match-media'

import App from './src/index'

global.matchMedia = matchMedia

AppRegistry.registerComponent('CarbonUIDocs', () => codePush(App))
