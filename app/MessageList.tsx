'use client'

import React from 'react'
import fetcher from '../utils/fetchMessages'
import useSWR from 'swr';
import { message } from '../typings';
import MessageComponent from './MessageComponent';


function MessageList() {
  const {data:messages,error,mutate}=useSWR("/api/getMessages",fetcher)
 
 
  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto'>
{messages?.map(message =>(
  <MessageComponent key={message.id}
  message={message}
  ></MessageComponent>
  
) )}
    </div>
  )
}

export default MessageList