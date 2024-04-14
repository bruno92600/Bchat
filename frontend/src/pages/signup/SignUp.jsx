import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js"

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                {"S'enregistrer"} <span className="text-yellow-500"> à Bchat</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label pt-2">
                        <span className="text-base label-text text-gray-300">Prénom</span>
                    </label>
                    <input type="text" placeholder="Entrer votre prénom" className="w-full input input-bordered h-10" 
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value })}
                    />
                </div>

                <div>
                    <label className="label pt-2">
                        <span className="text-base label-text text-gray-300">Pseudo</span>
                    </label>
                    <input type="text" placeholder="Entrer votre pseudo" className="w-full input input-bordered h-10"
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value })}
                     />
                </div>

                <div>
                    <label className="label pt-2">
                        <span className="text-base label-text text-gray-300">Mot de passe</span>
                    </label>
                    <input type="password" placeholder="Entrer votre Mot de passe" className="w-full input input-bordered h-10" 
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value })}
                    />
                </div>
                <div>
                <label className="label pt-2">
                    <span className="text-base label-text text-gray-300">Confirmer le mot de passe</span>
                </label>
                <input type="password" placeholder="Confirmer votre Mot de passe" className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
                />
                </div>

                <GenderCheckbox onCheckBoxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

                <Link to='/login' className="text-sm text-gray-300 hover:underline hover:text-yellow-700 mt-2 inline-block">
                    Vous avez déjà un compte?
                </Link>
                <div>
                <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "S'enregistrer"}
						</button>
                </div>
            </form>
        </div>
    </div>
)
};

export default SignUp;

// commencement du code de départ
// import GenderCheckbox from "./GenderCheckbox.jsx";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">
//                 {"S'enregistrer"} <span className="text-yellow-500"> à Bchat</span>
//             </h1>
//             <form>
//                 <div>
//                     <label className="label pt-2">
//                         <span className="text-base label-text text-gray-300">Prénom</span>
//                     </label>
//                     <input type="text" placeholder="Entrer votre prénom" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label pt-2">
//                         <span className="text-base label-text text-gray-300">Pseudo</span>
//                     </label>
//                     <input type="text" placeholder="Entrer votre pseudo" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label pt-2">
//                         <span className="text-base label-text text-gray-300">Mot de passe</span>
//                     </label>
//                     <input type="password" placeholder="Entrer votre Mot de passe" className="w-full input input-bordered h-10" />
//                 </div>
//                 <div>
//                 <label className="label pt-2">
//                     <span className="text-base label-text text-gray-300">Confirmer le mot de passe</span>
//                 </label>
//                 <input type="password" placeholder="Confirmer votre Mot de passe" className="w-full input input-bordered h-10" />
//                 </div>

//                 <GenderCheckbox />

//                 <a href="#" className="text-sm text-gray-300 hover:underline hover:text-yellow-700 mt-2 inline-block">
//                     Vous avez déjà un compte?
//                 </a>
//                 <div>
//                     <button className="btn btn-block btn-sm mt-2 border border-slate-700 text-gray-500">{"S'enregistrer"}</button>
//                 </div>
//             </form>
//         </div>
//     </div>
// )
// };

// export default SignUp;