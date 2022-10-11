import React from "react";
import PensionDetailViewHeader from "./PensionDetailViewHeader";

function PensionDetailView(props) {

  return (
    <div className="row">
          {props.UserPensionData.map((UserPensionData) => (

            <PensionDetailViewHeader Policy={UserPensionData.Policy}
                                     Provider={UserPensionData.Provider}
                                     Employer={UserPensionData.Employer}
                                     Active={UserPensionData.Active}
                                     Funddetails={UserPensionData.Funddetails} />
           ))};
     </div>
  )
};

export default PensionDetailView;
