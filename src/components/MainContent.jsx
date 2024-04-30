import React from "react";
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import SalaryCalculator from './SalaryCalculator/SalaryCalculator';

const MainContent = ({ familyMembersData,currentID, editPersonDataById,getFamilyMemberByName,getFamilyMemberByID}) => {
  const m = "Adj hozzá családtagot!";

  return (
    <>
      {familyMembersData.length > 0 ? (
        <main>
          <div className="flex w-full">
            <div className="grid flex-grow h-screen bg-base-500 place-items-center">
              <SalaryCalculator
                familyMembersData={familyMembersData}
                getFamilyMemberByName={getFamilyMemberByName}
                getFamilyMemberByID={getFamilyMemberByID}
                currentID={currentID}
                editPersonDataById={editPersonDataById}
              />
            </div>
            <div className="grid flex-grow h-screen bg-base-200 place-items-center">
              <HouseholdSummary
                familyMembersData={familyMembersData}
                currentID={currentID}
              />
            </div>
          </div>
        </main>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>{m}</p>
        </div>
      )}
    </>
  );
};

export default MainContent;
