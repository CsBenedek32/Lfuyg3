import React, { useState, useEffect } from 'react';
import AddModal from './components/AddModal';
import FirstModal from './components/FirstModal';

// tudom hogy nem optimalis távolrol sem de kifutottam idöböl

const FamilyMemberTabs = ({familyMembersData,setfamilyMembersData,createFamilyMember, currentID,setCurrentID}) => {
const [isFirstNameModalOpen, setIsFirstNameModalOpen] = useState(true); 
const [newMemberName, setNewMemberName] = useState('');

const handleAddMember = () => {
 const modal = document.getElementById('addMemberModal');
 if (modal) {
  modal.showModal();
 }
};

const handleModalClose = () => {
 const modal = document.getElementById('addMemberModal');
 if (modal) {
  modal.close();
 }
};

const handleAddModalMember = () => {
 const newName = newMemberName;
 createFamilyMember(newName, 0, false, false, null, false,false,0,0,0);
 setNewMemberName('')
 handleModalClose();
};

return (
<div className='bg-base-200'>
   {familyMembersData.length > 0 &&  (
   <div className="menu  bg-base-200 space-y-5">
    <h2 className="menu-title text-2xl ">Bérkalkulátor alkalmazás</h2>
    <ul>
    {familyMembersData.map((member, index) => (
        <li key={index}  className=' text-center rounded-lg textsize20 py-1 '><a href="#" className={`text-justify border-4 border-slate-900 ${currentID === member.newID ? 'active' : ''}`} onClick={() => setCurrentID(member.newID)}>
            {member.name}
        </a></li>
    ))}
    <li><a href="#" className=" btn btn-blue text-center border-4 border-blue-900  rounded-lg textsize20" onClick={handleAddMember}>
        +
    </a></li>
    </ul>
</div>

   )}
   <AddModal  newMemberName={newMemberName} setNewMemberName={setNewMemberName} handleAddModalMember={handleAddModalMember} handleModalClose={handleModalClose}/>
   <FirstModal  
   newMemberName={newMemberName}
   setNewMemberName={setNewMemberName}
   createFamilyMember={createFamilyMember}
   setIsFirstNameModalOpen={setIsFirstNameModalOpen}
   isFirstNameModalOpen={isFirstNameModalOpen}
  />
   
</div>
);
};
export default FamilyMemberTabs;