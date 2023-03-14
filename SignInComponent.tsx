
'use client'
import {getProviders, signIn}from 'next-auth/react'
import { type } from 'os'

type Props = {
    providers: Awaited<ReturnType<typeof getProviders> >
}


function SignInComponent({providers}: Props) {
  
   
  
  
    return (
    <div className='flex justify-center  '>

{Object.values(providers!).map((provider)=>(
 <div className='' key={provider.name}>
 <button className=' mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
onClick={()=>signIn(provider.id,{
   callbackUrl:'http://localhost:3000/' 
})}
 >sign in with    {provider.name}
   
    </button>
   </div>
    
))}


    </div>
  )
}

export default SignInComponent