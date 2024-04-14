import useGetConversations from "../../hooks/useGetConversations.js"
import Conversation from "./Conversation.jsx"
import { getRandomEmoji } from "../../utils/emojis.js"

const Conversations = () => {
  const {loading, conversations} = useGetConversations()
  return (
    <div className="py-2 flex flex-col overflow-auto">

        {conversations.map((conversation, idx) => (
          <Conversation 
          key={conversation.id} 
          conversation={conversation} 
          emoji={getRandomEmoji()} 
          lastIdx = {idx === conversations.length - 1}
          />
        ))}

     {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations

// code de départ
// import Conversation from "./Conversation.jsx"

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default Conversations