
import Image from "next/image"
import { message } from "../typings"

type props = {

    message:message
   
}

function MessageComponent({message}:props) {
  return (
    <div className="flex w-fit ">
   <div className="flex-shrink-0">
    <Image
    src={message.profilePic}
     alt="profile pic"
     className='rounded-full mx-2'
     height={10}
     width={50}
     ></Image>
   </div>
 <div >
    <p className="text-[0.65rem] px-[2px]pb-[2px] text-red-400">
    {message.username}
    <div className="flex items-end">
        <div className="px-3 py-2 rounded-lg w-fit text-white bg-red-400" >
            <p>
                {message.message}
            </p>

        </div>
        <p className="text-[0.65rem] italic px-2 text-gray-300">{new Date (message.created_at).toLocaleString()}</p>
    </div>
    </p></div>
  
  </div>
  )
}

export default MessageComponent