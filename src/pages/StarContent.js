import React from 'react'

function StarContent({key,left,time,color}) {

  return (
    <div className='star-item' key={key} style={{"left":left+"%" , "animationDelay": time+"ms" , "backgroundColor":color} } ></div>
  )
}

export default StarContent