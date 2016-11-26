import merge from 'lodash/merge'
import { Colors, themes } from 'carbon-ui'

export default merge(themes.light, {
  colors: {
    primary: Colors.cyan400,
  },
})
