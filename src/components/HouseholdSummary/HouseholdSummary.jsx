import React from 'react';

const HouseholdSummary = ({ familyMembersData, currentID }) => {
  const totalNetto = familyMembersData.reduce((total, member) => total + member.netto, 0);

  return (
    <div className="overflow-x-auto ">
      <table  className="table text-2xl">
        <thead>
          <tr>
            <th></th>
            <th >Név</th>
            <th >netto</th>
          </tr>
        </thead>
        <tbody>
          {familyMembersData.map((member, index) => (
            <tr key={index} className={member.newID === currentID ? 'activerow' : ''}>
              <th >{index + 1}</th>
              <td >{member.name}</td>
              <td >{Math.round(member.netto)}</td>
            </tr>
          ))}
          <tr>
            <th>Összesen</th>
            <td></td>
            <td>{Math.round(totalNetto)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HouseholdSummary;
