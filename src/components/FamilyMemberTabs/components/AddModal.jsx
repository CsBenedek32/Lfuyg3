

import React from "react";

const AddModal = ({newMemberName,setNewMemberName,handleAddModalMember,handleModalClose}) =>{
   
   
    return(
      <dialog id="addMemberModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
         <h3 className="font-bold text-lg">Felhasznaló hozzadása:</h3>
         <input 
            id="newMemberName" 
            type="text"  
            className="border border-gray-300 rounded px-2 py-1 my-2" 
            placeholder="Enter name" 
            value={newMemberName} 
            onChange={(e) => setNewMemberName(e.target.value)} 
         />
         <div className="modal-action">
            <button className="btn" onClick={handleAddModalMember}>Hozáadás</button>
            <button className="btn" onClick={handleModalClose}>Mégse</button>
         </div>
      </div>
   </dialog>
   )
}

export default AddModal