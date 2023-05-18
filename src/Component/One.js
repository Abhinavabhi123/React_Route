import React from 'react'
import Two from './Two'

function One(props) {
  return (
    <div>
      <h2>This is page One</h2>
      <Two value={props.value} />
    </div>
  )
}

export default One
