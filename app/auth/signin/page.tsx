
import {getProviders,signIn}from 'next-auth/react'
import Image from 'next/image';
import profile from '../signin/v1091-02.jpg'

import SignInComponent from '../../../SignInComponent';


async function SignInPage() {
    const provider = await getProviders();

  return (
    <div><div>
        <Image
         src={ profile}
         alt="profile pic"
         className='rounded-full m-auto mt-20 mb-20'
         height={300}
         width={300}
        
        >


        </Image>
        
        </div >
        <SignInComponent providers={provider}/>
        
        </div>
  )
}

export default SignInPage