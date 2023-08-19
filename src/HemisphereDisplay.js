/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import north from './image/north.jpg'
import south from './image/south.jpg'
import './Hemisphere.css'

const hemisphereConfig = {
  Northern: {
    text: 'this is north',
    picture: north
  },
  Southern: {
    text: 'this is south',
    picture: south
  }
}

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern'
  const { text, picture } = hemisphereConfig[hemisphere]
  return (
    <div className={hemisphere}>
      <div className='ui raised text container segment'>
        <div className='image'>
          <img src={picture} alt='picture' />
        </div>
        <div className='ui teal bottom attached label'>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  )
}
export default HemisphereDisplay
