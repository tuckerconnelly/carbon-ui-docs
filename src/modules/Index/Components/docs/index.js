import set from 'lodash/set'

import docgenOutput from './docgenOutput.json'

/**
 * Wraps and encapsulates the output from react-docgen. Docgen output is flat,
 * but wanted to represent the output as a tree.
 */
class ComponentDocs {
  get tree() {
    const tree = {}
    
    Object.keys(docgenOutput).forEach(filename => {
      const withinComponentsFolder = filename.split('node_modules/carbon-ui/src/components/').pop()
      const layers = withinComponentsFolder.split('/')
      
      // Remove .js from end of name
      layers[layers.length - 1] = layers[layers.length - 1].split('.')[0]
      // Replace index.js with folder name
      if (layers[layers.length - 1] === 'index') layers[layers.length - 1] = layers[layers.length - 2]
      
      const caplitalizedLayers = layers.map(name =>
        name.charAt(0).toUpperCase() + name.substring(1)
      )
      
      set(tree, caplitalizedLayers, docgenOutput[filename])
    })
    
    return tree
  }
  
  findDocForName(name, tree = this.tree) {
    for (const docName of Object.keys(tree)) { // eslint-disable-line no-restricted-syntax
      if (docName === name && tree[docName].props) return tree[docName]
      
      if (tree[docName].props) continue
      
      const potentialDocInNodes = this.findDocForName(name, tree[docName])
      if (potentialDocInNodes) return potentialDocInNodes
    }
  }
}

export default new ComponentDocs()
