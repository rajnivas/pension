import React from "react";
import PensionShortViewTemplate from "./PensionShortViewTemplate";

function PensionsShortView(props) {
  return (
    <div className="row project-cards">
      {props.UserPensionData.map((UserPensionData) => (
      <PensionShortViewTemplate Policy={UserPensionData.Policy}
                                Provider={UserPensionData.Provider}
                                Employer={UserPensionData.Employer}
                                Active={UserPensionData.Active}
                                Start={UserPensionData.Start}
                                Funddetails={UserPensionData.Funddetails} />
      ))};
    </div>
  )
};

export default PensionsShortView;
