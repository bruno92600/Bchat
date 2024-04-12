const GenderCheckbox = () => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox border-slate-900" />
                <span className="label-text">Homme</span>
            </label>
        </div>
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox border-slate-900" />
                <span className="label-text">Femme</span>
            </label>
        </div>
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox border-slate-900" />
                <span className="label-text">non genré</span>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox

// commencement du code de départ
// const GenderCheckbox = () => {
//     return (
//       <div className="flex">
//           <div className="form-control">
//               <label className="label gap-2 cursor-pointer">
//                   <input type="checkbox" className="checkbox border-slate-900" />
//                   <span className="label-text">Homme</span>
//               </label>
//           </div>
//           <div className="form-control">
//               <label className="label gap-2 cursor-pointer">
//                   <input type="checkbox" className="checkbox border-slate-900" />
//                   <span className="label-text">Femme</span>
//               </label>
//           </div>
//           <div className="form-control">
//               <label className="label gap-2 cursor-pointer">
//                   <input type="checkbox" className="checkbox border-slate-900" />
//                   <span className="label-text">non genré</span>
//               </label>
//           </div>
//       </div>
//     )
//   }
  
//   export default GenderCheckbox