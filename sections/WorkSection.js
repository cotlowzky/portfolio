import React from 'react'
function WorkSection(props) {
  return (
    <div className="flex flex-column" id="work">
    <h2 className='montserrat-bold text-black text-96 text-title text-title-work'>Works</h2>
      <div className='flex'>
        {props.content}
      </div>
    </div>
  )
}

export default WorkSection