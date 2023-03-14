'use client'

import React, { useEffect } from 'react'
import fetcher from '../utils/fetchMessages'
import useSWR from 'swr';
import { message } from '../typings';
import MessageComponent from './MessageComponent';
import { clientPusher } from '../pusher';
import { type } from 'os';

type props ={
  initialMessages:message[]
}

function MessageList({initialMessages}:props) {
  const {data:messages,error,mutate}=useSWR("/api/getMessages",fetcher)
 useEffect(()=>{
const channel = clientPusher.subscribe('messages')
channel.bind('new-message',async (data:message)=>{

  if(messages?.find((message)=> message.id === data.id)) return;

  
  if(!messages){
mutate(fetcher)
  }
  else{
    mutate(fetcher,{
      optimisticData:[data, ...messages!],
  rollbackOnError:true,
    })
  }
 
})
return ()=>{
  channel.unbind_all();
  channel.unsubscribe();
}

 },[messages,mutate,clientPusher])
 
  return (
    <div className='space-y-5  grid-cols-1 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
{messages?.map(message =>(
  <MessageComponent key={message.id}
  message={message}
  ></MessageComponent>
  
) )}
    </div>
  )
}

export default MessageList