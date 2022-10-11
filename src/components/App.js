import React from "react";
import SideBar from "./Sidebar";
import Notifications from "./Notifications";
import PersonalIcon from "./PersonalIcon";
import PensionsShortView from "./PensionsShortView";
import Overview from "./Overview";
import Statement from "./Statement";
import UserProfile from "./UserProfile";
import PensionDetailView from "./PensionDetailView";
import UserIdentityData from "./UserIdentityData";
import UserPensionData from "./UserPensionData";
import PensionDetailAccumulations from "./PensionDetailAccumulations";


const FirstName = UserIdentityData.FirstName;
const Surname = UserIdentityData.Surname;
const Title = UserIdentityData.Title
const Email = UserIdentityData.Email;
const Phone = UserIdentityData.Phone;
const MailingAddress = UserIdentityData.MailingAddress;
const BillingAddress = UserIdentityData.BillingAddress;
const DateofBirth = UserIdentityData.DateofBirth;
const Nino = UserIdentityData.Nino;

var IndPolicyValue = [];

function add(accumulator, a) {
  return accumulator + a;
}

UserPensionData.map(function(item) {
var IndFundValue = [];
 item.Funddetails.map(function(element) {
      IndFundValue.push(element.Units * element.UnitPrice) ;
    } ) ;
    IndPolicyValue.push(IndFundValue.reduce(add)) ;
} )  ;

const TotalPolicies = IndPolicyValue.length;
const PotValue = IndPolicyValue.reduce(add);

function App() {
  return (
    <div className="main">
    <SideBar />
   <div className="right">
    <div className="tab-content">
      <div id="overview" className="tab-pane fade in active">
        <div className="header">
          <h4><b>Welcome back {FirstName}</b></h4>
          <ul className="pull-right">
             <Notifications />
             <PersonalIcon />
          </ul>
    </div>
        <div className="content">
          <Overview PotValue={PotValue}/>
          <h4><b>Your Pensions</b></h4>
          <PensionsShortView UserPensionData={UserPensionData}/>
          <Statement />
        </div>
      </div>
      <div id="analytics" className="tab-pane fade">
        <div className="header">
            <h4>Pension Breakdown</h4>
        </div>
        <div className="content">
          <PensionDetailAccumulations TotalPolicies={TotalPolicies}
                                      PotValue={PotValue} />
          <PensionDetailView  UserPensionData={UserPensionData}/>
        </div>
      </div>

      <div id="user-profile" className="tab-pane fade ">
        <div className="header">
            <h4>User Profile</h4>
        </div>
        <div className="content">
          <UserProfile FirstName={FirstName}
                       Surname={Surname}
                       Title={Title}
                       Email={Email}
                       Phone={Phone}
                       MailingAddress={MailingAddress}
                       BillingAddress={BillingAddress}
                       DateofBirth={DateofBirth}
                       Nino={Nino}    />
        </div>
      </div>
  </div>
</div>
</div>
  );
}

export default App;
