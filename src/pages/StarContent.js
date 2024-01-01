import React from 'react'

function StarContent({id,left,time,color}) {

  return (
    <div className='star-item' style={{"left":left+"%" , "animationDelay": time+"ms" , "backgroundColor":color} } ></div>
  )
}

export default StarContent