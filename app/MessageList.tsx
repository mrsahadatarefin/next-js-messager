'useClient'

import React from 'react'
import fetcher from '../utils/fetchMessages'
import useSWR from 'swr';

function MessageList() {
  const {data:messages,error,mutate}=useSWR("/api/getMessages",fetcher)
 
  return (
    <div>

    </div>
  )
}

export default MessageList