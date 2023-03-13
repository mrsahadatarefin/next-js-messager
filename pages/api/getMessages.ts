// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { type } from 'os';
import redis from '../../redis'
type Data = {
  
}
type ErrorData ={
    body:string
}   

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data |ErrorData >
) {

    if(req.method !== 'GET'){
        res.status(405).json({body:'method not allowed'})
        return
    }
   
const messagesRes = await redis.hvals('messages')
const messages = messagesRes.map((message)=>JSON.parse(message)).sort((a,b)=> b.created_at - a.created_at)
  res.status(200).json({messages })
}
