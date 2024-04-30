

import React from "react";

const FirstModal = ({newMemberName,setNewMemberName,createFamilyMember,setIsFirstNameModalOpen,isFirstNameModalOpen}) =>{
   
   
    return(
      <dialog id="firstNameModal" className="modal modal-bottom sm:modal-middle" open={isFirstNameModalOpen}>
      <div className="modal-box">
         <h3 className="font-bold text-lg">Mi a neved?</h3>
         <input 
            id="newMemberName" 
            type="text"  
            className="border border-gray-300 rounded px-2 py-1 my-2" 
            placeholder="Enter name" 
            value={newMemberName} 
            onChange={(e) => setNewMemberName(e.target.value)} 
         />
         <div className="modal-action">
            <button className="btn" onClick={() => {
            const newName = newMemberName
            setNewMemberName('')
            createFamilyMember(newName, 0, false, false, null, false,false,0,0, 0);
            setIsFirstNameModalOpen(false);
            }}>Hozáadás</button>
         </div>
      </div>
   </dialog>
   )
}

export default FirstModal