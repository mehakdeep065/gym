import React from 'react'

function Features() {
  return (
    <>
      <div className='grid grid-cols-3 justify-around gap-10 mx-60 mt-5 '>
        <p className='bg-red-600 px-10 py-20 text-2xl   rounded-2xl'>Expert Traners</p>
        <p  className='bg-red-600 px-10 py-20 text-2xl  rounded-2xl' >Healthy Diet Plan</p>
        <p  className='bg-white text-red-600 px-10 py-20 text-2xl  rounded-2xl' >Best Machines</p>
        <p  className='bg-red-600 px-10 py-20 text-2xl  rounded-2xl' >Best Prices </p>
        <p  className='bg-red-600 px-10 py-20 text-2xl  rounded-2xl' >Career Growth </p>
      </div>
    </>
  )
}

export default Features
