const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className="label-text">Homme</span>
                <input type="checkbox" className="checkbox border-slate-900" 
                checked={selectedGender === "male"}
                onChange={() => onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className="label-text">Femme</span>
                <input type="checkbox" className="checkbox border-slate-900" 
                checked={selectedGender === "female"}
                onChange={() => onCheckBoxChange("female")}
                />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "neutral" ? "selected" : ""}`}>
            <span className="label-text">neutre</span>
                <input type="checkbox" className="checkbox border-slate-900" 
                checked={selectedGender === "neutral"}
                onChange={() => onCheckBoxChange("neutral")}
                />
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