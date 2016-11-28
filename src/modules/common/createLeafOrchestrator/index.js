import React, { PropTypes } from 'react'

import { createOrchestrator } from 'react-stack-nav'

import NotFound from 'src/modules/common/NotFound'

const VALID_FRAGMENTS = [undefined, '']

export default function createLeafOrchestrator(fragment) {
  return ComposedComponent => {
    const LeafOrchestrator = props => {
      if (VALID_FRAGMENTS.indexOf(props.routeFragment) === -1) return <NotFound />
      
      return <ComposedComponent {...props} />
    }
    
    LeafOrchestrator.propTypes = {
      // createOrchestrator
      routeFragment: PropTypes.string,
    }
    
    return createOrchestrator(fragment)(LeafOrchestrator)
  }
}
