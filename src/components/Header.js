import React from 'react'

const Header = () => {
  return (
    //Gradient in Tailwind css
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
       <img className='w-44 ' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix-logo"></img>
    </div>
  )
}

export default Header