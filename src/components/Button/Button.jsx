
import React from 'react'
import button from "./button.css"

export default function Button(props) {
  let buttonStyle = {background: props.color};
  
  return ( 
    <button style={buttonStyle}>{props.children}</button>
  )
}


