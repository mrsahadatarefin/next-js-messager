'use client'

import { FormEvent, useState } from "react"
import {v4 as uuid} from 'uuid'
import profile from '../app/assets/profilepic.jpg'
import { message } from "../typings"
import useSWR from 'swr';
import fetcher from "../utils/fetchMessages"

function ChatInput() {
    const [input,setInput]=useState('')
   const {data:messages,error,mutate}=useSWR("/api/getMessages",fetcher)
   console.log(messages)
   const addMessage = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(! input)return;

       const messageToSend = input
       setInput('')
       const id = uuid();
       const message:message = {
        id,
        message:messageToSend,
        created_at:Date.now(),
        username:'Sahadat',
        profilePic:profile,
        email:'sahadatarifin806@gmail.com'
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
    <form onSubmit={addMessage} className='fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100 '>
        <input  value={input} onChange={(e)=>setInput(e.target.value)} className='flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed ' placeholder='Enter message here...' type='text' />
        <button type='submit' disabled={!input} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed '>
            send
        </button>

    </form>
  )
}

export default ChatInput