import React from 'react'

const Item = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.description}</span>
      <span>{props.price}</span>
    </div>
  )
}

export default Item
