import React from 'react'
import { Text, View } from 'react-native-universal'
import { Divider, Display1, Headline, Title, Subheading, Body2, Body1, gu } from 'carbon-ui'
import merge from 'lodash/merge'
import SimpleMarkdown from 'simple-markdown'

import InlineCode from 'src/modules/common/InlineCode'
import componentDocs from 'src/modules/Index/Components/docs'
import ExampleCard from './ExampleCard'

export default component => {
  let codeBlockId = 0
  return merge(SimpleMarkdown.defaultRules, {
    strong: {
      react: (node, output, state) =>
        <Body2 key={state.key}>
          {output(node.content, state)}
        </Body2>,
    },
    paragraph: {
      react: (node, output, state) =>
        <Body1 key={state.key} style={styles.paragraph}>
          {output(node.content, state)}
        </Body1>,
    },
    text: {
      react: (node, output, state) =>
        <Text key={state.key}>
          {node.content.replace('\n', ' ')}
        </Text>,
    },
    br: {
      react: (node, output, state) =>
        <Text key={state.key}>
          {'\n\n'}
        </Text>,
    },
    hr: {
      react: (node, output, state) =>
        <Divider key={state.key} style={styles.divider} />,
    },
    heading: {
      react: (node, output, state) => {
        let HeadingComponent = Body2
        switch (node.level) {
          case 1: HeadingComponent = Display1; break
          case 2: HeadingComponent = Headline; break
          case 3: HeadingComponent = Title; break
          case 4: HeadingComponent = Subheading; break
          case 5: HeadingComponent = Body2; break
          case 6: HeadingComponent = Body1; break
        }
        
        return (
          <HeadingComponent key={state.key} style={styles.heading}>
            {output(node.content, state)}
          </HeadingComponent>
        )
      },
    },
    codeBlock: {
      react: (node, output, state) => {
        const Example = componentDocs.findExampleForName(component, codeBlockId)
        codeBlockId++
        return (
          <ExampleCard key={state.key} source={node.content}>
            <Example />
          </ExampleCard>
        )
      },
    },
    inlineCode: {
      react: (node, output, state) =>
        <InlineCode key={state.key}>
          {node.content}
        </InlineCode>,
    },
  })
}

const styles = {
  heading: {
    marginBottom: 4 * gu,
  },
  paragraph: {
    marginBottom: 4 * gu,
  },
  divider: {
    marginBottom: 4 * gu,
  },
}
