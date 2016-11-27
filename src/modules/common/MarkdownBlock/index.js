import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import SimpleMarkdown from 'simple-markdown'

import rulesForComponent from './rules'


const MarkdownBlock = ({ children, component, ...other }) => {
  const rules = rulesForComponent(component)
  const rawBuiltParser = SimpleMarkdown.parserFor(rules)
  const parser = source => rawBuiltParser(`${source}\n\n`, { inline: false })
  const reactOutput = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'))

  return (
    <View {...other}>
      {reactOutput(parser(children))}
    </View>
  )
}
  
MarkdownBlock.propTypes = {
  children: PropTypes.string.isRequired,
  component: PropTypes.string,
}

export default MarkdownBlock
