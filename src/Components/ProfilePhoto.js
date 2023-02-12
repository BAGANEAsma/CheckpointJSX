import React from 'react'
import Photo from './bebe.png'
import './ProfilePhoto.css'

function ProfilePhoto() {
  return (
    <div>
     <img className='photo' src={Photo} ></img>
    </div>
  )
}

export default ProfilePhoto
