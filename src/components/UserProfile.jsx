import React from "react";
import UserActivity from "./UserActivity";
import UserIdentity from "./UserIdentity";

function UserProfile(props) {
  return (
    <div className="row">
      <UserActivity />
      <UserIdentity FirstName={props.FirstName}
                   Surname={props.Surname}
                   Title={props.Title}
                   Email={props.Email}
                   Phone={props.Phone}
                   MailingAddress={props.MailingAddress}
                   BillingAddress={props.BillingAddress}
                   DateofBirth={props.DateofBirth}
                   Nino={props.Nino} />
    </div>
  )
};

export default UserProfile;
