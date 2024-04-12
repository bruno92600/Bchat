import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Chercher..." className="input input-bordered rounded-full" />
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