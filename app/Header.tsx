

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../app/assets/META.png'
import profile from '../app/assets/profilepic.jpg'
import LogoutButton from './LogoutButton'

function Header() {
 const session = true;
 if(session) return (

    <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm'>
    <div className='flex space-x-2'>
        <Image
        
    className='rounded-full mx-2 object-contain'
      height={10}
      width={50}
      src={profile} 
      alt='profile picture' 
        />
        <div>
            <p className='text-blue-400 '>LOgged in as:</p>
            <p className='font-bold text-lg'> sahadat arefin</p>
        </div>

    </div>


    <LogoutButton/>
    
    </header>
    
 )


  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
<div className='flex flex-col items-center space-y-5' >

    <div className='flex space-x-2 items-center'>
      
      <Image src={img} height={10} width={50} alt='logo'></Image>
    <p className='text-blue-400'>Welcome to meta Messenger</p>
    
    </div>

    <Link href='/auth/signIn' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</Link>
</div>

    </header>
  )
}

export default Header