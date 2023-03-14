'use client'

import { FormEvent, useState } from "react"
import {v4 as uuid} from 'uuid'

import { message } from "../typings"
import useSWR from 'swr';
import fetcher from "../utils/fetchMessages"
import { unstable_getServerSession } from "next-auth"

type Props ={
  session : Awaited<ReturnType<typeof unstable_getServerSession>>
}

function ChatInput({session}:Props) {
    const [input,setInput]=useState('')
   const {data:messages,error,mutate}=useSWR("/api/getMessages",fetcher)
   console.log(messages)
   const addMessage = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!input || !session)return;
        

       const messageToSend = input
       setInput('')
       const id = uuid();

       const message:message = {
        id,
        message:messageToSend,
        created_at:Date.now(),
        username: session?.user?.name!,
        profilePic: session?.user?.image!,
        email: session?.user?.email!,
       }
       const uploadMessageToUpStash = async ()=>{
        const data = await fetch('/api/addMessage',{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({message})
        }).then(res => res.json())
        



return [data.message, ...messages!]

       } 
    

       await mutate(uploadMessageToUpStash,{

        optimisticData:[message, ...messages!],

        rollbackOnError:true
       })

    }
  return (
    <form onSubmit={addMessage} className='fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100  bg-white '>
        <input  disabled={!session} value={input} onChange={(e)=>setInput(e.target.value)} className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed ' placeholder='Enter message here...' type='text' />
        <button type='submit' disabled={!input} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed '>
            send
        </button>

    </form>
  )
}

export default ChatInput