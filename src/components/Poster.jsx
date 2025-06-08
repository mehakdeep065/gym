import React from 'react'

function Poster() {
  return (
    <>
      <div className='flex'>
        <div className='flex-col  absolute  space-y-10 p-10  mt-40 ml-20 z-10  '>
           
            <h1 className='text-5xl/snug font-serif '>The Body<br/> You See</h1>
            <h3 className='text-3xl' >The struggle you don’t</h3>
            <button className=' px-5 py-2 rounded-xl bg-red-500 mr-16 ' >Book Membership Now!</button>
           
        </div>
        <div className='ml-auto' >
            <img className=' ml-52 opacity-70 h-[889px] ' src="Poster2.jpg" alt="Poster" />
        </div>
      </div>
    </>
  )
}

export default Poster
