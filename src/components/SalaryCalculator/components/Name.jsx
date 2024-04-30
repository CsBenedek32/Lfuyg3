import React from "react";

const Name = ({name,handleNameChange,currentID,getFamilyMemberByID}) =>{
   return(
   <div className="mb-4">
        <label htmlFor="name" className="block  mb-1">Családtag neve:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 rounded px-2 py-1"
          placeholder={getFamilyMemberByID(currentID).name} 
        />
        <p className='text-xl'>adja meg a családtag nevét</p>
</div>)
}

export default Name