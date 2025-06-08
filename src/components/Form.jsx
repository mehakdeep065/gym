import React from 'react'

function Form() {
  return (
    <>
    <div>
        <h2 className='flex justify-center text-3xl font-serif mt-10 '>Get In <span className='text-red-400 font-bold ml-2'>Touch</span></h2>
        <form className='flex flex-col mx-80 m-10 p-10 gap-10  '>
            <input className='border-b-2 border-red-600' type='name ' placeholder='Enter name'></input>
            <input className='border-b-2 border-red-600' type='email' placeholder='Enter email'></input>
            <input className='border-b-2 border-red-600' type='number' placeholder='Enter number'></input>
            <button className='px-10 py-2.5 rounded bg-red-600  mx-auto'>Book now</button>
        </form>
    
    </div>
    </>
  )
}

export default Form
