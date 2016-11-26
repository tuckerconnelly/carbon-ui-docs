import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import SimpleMarkdown from 'simple-markdown'

import rules from './rules'

const rawBuiltParser = SimpleMarkdown.parserFor(rules)
const parser = source => rawBuiltParser(`${source}\n\n`, { inline: false })
const reactOutput = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'))

const MarkdownBlock = ({ children, ...other }) =>
  <View {...other}>
    {reactOutput(parser(children))}
  </View>
  
MarkdownBlock.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MarkdownBlock
