import React from 'react'

function Person({person}) {
  return (
      <h2>I am {person.name} and know {person.skill}</h2>
  )
}

export default Person