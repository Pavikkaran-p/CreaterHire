import React from 'react'
import image from '../assets/img.jpg'
const DispalyCard = ({data}) => {
    console.log(data)
  return (
    <div className='m-4 '>
      <div className='bg-white p-2 rounded-2xl shadow-2xl w-[30%] sm:w-[90%]'>
          <img className='px-3 m-2 w-25 h-25 rounded-3xl' src={image} alt="no img" />
          <h3>{data.title}</h3>
          <h3>{data.Exp}</h3>
          <h3>{data.SpecialIn}</h3>
      </div>
    </div>
  )
}

export default DispalyCard