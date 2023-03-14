import { unstable_getServerSession } from 'next-auth';
import React from 'react'
import { message } from '../typings'
import ChatInput from './ChatInput'
import MessageList from './MessageList'
import { Providers } from './Providers';

async function HomePage ()  {
  const data = await fetch('http://localhost:3000/api/getMessages')
  .then((res)=>res.json()
  );

  const messages: message[] = data.messages;
  console.log('messages',messages)
  const session= await unstable_getServerSession()
  return (

  <Providers session={session}>
 <main>
  <MessageList initialMessages={messages} />
  <ChatInput session={session}/>


    </main>

  </Providers>
   
  )
}

export default HomePage

