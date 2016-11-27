import fs from 'fs-extra'
import path from 'path'
import SimpleMarkdown from 'simple-markdown'

import docgenOutput from './docgenOutput.json'

const EXAMPLE_DIRNAME = 'generatedExamplesFromMarkdown'

const rawBuiltParser = SimpleMarkdown.parserFor(SimpleMarkdown.defaultRules)
const parser = source => rawBuiltParser(`${source}\n\n`, { inline: false })

let indexImports = ''
let indexExport = ''

Object.keys(docgenOutput).map(filename => { // eslint-disable-line array-callback-return
  const filenameParts = filename.split('/')
  let componentName = filenameParts.pop().split('.')[0]
  if (componentName === 'index') componentName = filenameParts.pop().split('.')[0]
  
  const doc = docgenOutput[filename]
  
  const syntaxTree = parser(doc.description)
  const codeBlocks = syntaxTree.filter(node => node.type === 'codeBlock')
  
  if (!codeBlocks.length) return // eslint-disable-line array-callback-return
  
  indexExport += `  ${componentName}: [\n`
  
  codeBlocks.forEach((codeBlock, i) => {
    fs.mkdirsSync(
      path.resolve(__dirname, `./${EXAMPLE_DIRNAME}/${componentName}`)
    )
    fs.writeFileSync(
      path.resolve(__dirname, `./${EXAMPLE_DIRNAME}/${componentName}/${i}.js`),
      `${codeBlock.content}\n`
    )
    
    indexImports += `import ${componentName}Example${i} from './${componentName}/${i}'\n`
    indexExport += `    ${componentName}Example${i},\n`
  })
  
  indexExport += '  ],\n\n'
})

const index = `${indexImports}\nexport default {\n${indexExport}\n}\n`

fs.writeFileSync(path.resolve(__dirname, `./${EXAMPLE_DIRNAME}/index.js`), index)

console.log('Finished generating examples')
