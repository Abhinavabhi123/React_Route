import React from 'react'
import One from '../Component/One'

function Profile(props) {
  return (
    <div>
        <h1>Profile Page</h1>
      <One value={props.value} />
    </div>
  )
}

export default Profile
