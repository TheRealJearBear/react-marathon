import React from 'react'

const Playlist=(props) => {
  return(
    <li
      className={props.className}
      onClick={props.handleClick}
    >
      {props.name}
    </li>
  )
}

export default Playlist
