import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {

  const colors = [
    { value: "#ff3224", name: "Red" },
    { value: "#1fc7ff", name: "Blue" },
    { value: "#ff54a4", name: "Pink" },
    { value: "#ff601c", name: "Orange" }
  ];

  const colorName = colors.filter(color => color.value === props.color)[0]?.name || 'Unknown';

  return (
    <>
      <div className='card-container' style={{boxShadow: `0px 0px 30px ${props.color}`, background:`${props.color}`}}>
        <img src="https://i.pinimg.com/originals/20/10/e4/2010e41eb945640d8319b1685475d30c.png"/>
        <h1 className='stats'>{props.name}</h1>
        <h1 className='stats'>{colorName}</h1>
        <h1 className='stats'>{props.speed} mph</h1>

        <Link className='update-button' to={'/update/'+ props.id}>Update Crew Info</Link>
      </div>
    </>


  )
}

export default Card