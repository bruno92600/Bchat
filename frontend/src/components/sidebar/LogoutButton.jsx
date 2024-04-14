import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const {loading, logout} = useLogout()
  return (
    <div className="mt-auto">
        {!loading ? (
          <RiLogoutBoxLine className="w-6 h-6 text-yellow-400 cursor-pointer" 
          onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}

    </div>
  )
}

export default LogoutButton

// code de départ
// import { RiLogoutBoxLine } from "react-icons/ri";

// const LogoutButton = () => {
//   return (
//     <div className="mt-auto">
//         <RiLogoutBoxLine className="w-6 h-6 text-yellow-400 cursor-pointer" />

//     </div>
//   )
// }

// export default LogoutButton