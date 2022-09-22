import React from 'react'
function WorkSection(props) {
  return (
    <div className="flex">
    <h2 className='montserrat-bold text-black text-96 text-title'>Works</h2>
      {props.content}
    </div>
  )
}

export default WorkSection