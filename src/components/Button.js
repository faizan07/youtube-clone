import React from 'react'

const Button = ({name, color}) => {
    
  return (
    <button className={color}>{name}</button>
  )
}

export default Button