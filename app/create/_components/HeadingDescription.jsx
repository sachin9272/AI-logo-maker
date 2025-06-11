import React from 'react'
import LogoTitle from './LogoTitle'

const HeadingDescription = ({title, description}) => {
  return (
    <div>
      <h2 className='font-bold text-3xl text-primary'>{title}</h2>
      <p className='text-lg text-gray-500 mt-2'>{description}</p>
    </div>
  )
}

export default HeadingDescription
