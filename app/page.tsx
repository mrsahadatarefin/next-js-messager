import React from 'react'
import { message } from '../typings'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

async function HomePage ()  {
  const data = await fetch('http://localhost:3000/api/getMessages')
  .then((res)=>res.json()
  );

  const messages: message[] = data.messages;
  console.log('messages',messages)
  
  return (
    <main>
  <MessageList initialMessages={messages} />
  <ChatInput/>


    </main>
  )
}

export default HomePage

