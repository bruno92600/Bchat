import { RiSendPlaneFill } from "react-icons/ri";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
            <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
            placeholder="Entrez votre message"
            />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <RiSendPlaneFill />
            </button>
        </div>
    </form>
  )
}

export default MessageInput

// code de départ
// import { BsSend } from "react-icons/bs"

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//         <div className="w-full">
//             <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
//             placeholder="Entrez votre message"
//             />
//             <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//             <BsSend />
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput