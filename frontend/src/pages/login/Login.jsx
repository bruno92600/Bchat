const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Se connecter à 
                <span className="text-yellow-500"> B-chat</span>
            </h1>

            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-gray-300">Pseudo</span>
                    </label>
                    <input type="text" placeholder="Entrer votre pseudo" className="w-full input input-bordered h-10" />
                </div>

                <div>
                    <label className="label">
                        <span className="text-base label-text text-gray-300">Mot de passe</span>
                    </label>
                    <input type="password" placeholder="Mot de passe" className="w-full input input-bordered h-10" />
                </div>
                <a href="#" className="text-sm text-gray-300 hover:underline hover:text-yellow-700 mt-2 inline-block" >
                    Vous {"n'avez"} pas de compte?
                    </a> 
                    <div>
                        <button className="btn btn-block btn-sm mt-2 text-gray-500">{"Let's"} go !</button>
                    </div>               
            </form>
        </div>
    </div>
  )
}

export default Login

// commencement du code de départ

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//               <h1 className="text-3xl font-semibold text-center text-gray-300">
//                   Se connecter à 
//                   <span className="text-yellow-500"> B-chat</span>
//               </h1>
  
//               <form>
//                   <div>
//                       <label className="label p-2">
//                           <span className="text-base label-text text-gray-300">Pseudo</span>
//                       </label>
//                       <input type="text" placeholder="Entrer votre pseudo" className="w-full input input-bordered h-10" />
//                   </div>
  
//                   <div>
//                       <label className="label">
//                           <span className="text-base label-text text-gray-300">Mot de passe</span>
//                       </label>
//                       <input type="password" placeholder="Mot de passe" className="w-full input input-bordered h-10" />
//                   </div>
//                   <a href="#" className="text-sm text-gray-300 hover:underline hover:text-yellow-700 mt-2 inline-block" >
//                       Vous {"n'avez"} pas de compte?
//                       </a> 
//                       <div>
//                           <button className="btn btn-block btn-sm mt-2 text-gray-500">{"Let's"} go !</button>
//                       </div>               
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login