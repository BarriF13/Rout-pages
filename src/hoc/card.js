import React from 'react'

export const Card = (props) => {

  const style = {
    background:'skyblue'
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
export default Card;
