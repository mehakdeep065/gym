import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex justify-between mx-5 items-center m-3 '>
                <div>
                    <img src="Logo.png" alt="logo img" />
                </div>
                <div>
                    <ul className='flex gap-5 font-light'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Gallary</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div>
                    <button className=' px-5 py-2 rounded-xl bg-red-500 mr-16 '>Get Membership</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
