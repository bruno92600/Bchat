import { useState } from "react";
import toast from "react-hot-toast";

import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations"

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if(search.length < 3) {
      return toast.error("Veuillez saisir au moins 3 caractères")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch("")
    } else {
      toast.error("Aucune conversation trouvée")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Chercher..." className="input input-bordered rounded-full" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-yellow-500 text-white">
        <IoSearchOutline className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput

// code de départ
// import { IoSearchOutline } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Chercher..." className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle bg-yellow-500 text-white">
//         <IoSearchOutline className="w-6 h-6 outline-none" />
//         </button>
//     </form>
//   )
// }

// export default SearchInput