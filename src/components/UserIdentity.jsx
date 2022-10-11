import React from "react";
import UserBilling from "./UserBilling";

function UserIdentity(props) {
  return (
    <div className="col-sm-7">
      <div className="card-5">
        <h4><b>Your Identity</b></h4>
        <div class="usercard">
        <div class="card-body">
            <i class="fa fa-pen fa-xs useredit"></i>
            <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>:</td>
                        <td>{props.Title}</td>
                    </tr>
                    <tr>
                        <td>FirstName</td>
                        <td>:</td>
                        <td>{props.FirstName}</td>
                    </tr>
                    <tr>
                        <td>SurName</td>
                        <td>:</td>
                        <td>{props.Surname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>{props.Email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>:</td>
                        <td>{props.Phone}</td>
                    </tr>
                    <tr>
                        <td>Mailing Address</td>
                        <td>:</td>
                        <td>{props.MailingAddress}</td>
                    </tr>
                    <tr>
                        <td>Billing Address</td>
                        <td>:</td>
                        <td>{props.BillingAddress}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>:</td>
                        <td>{props.DateofBirth}</td>
                    </tr>
                    <tr>
                        <td>National Insurance</td>
                        <td>:</td>
                        <td>{props.Nino}</td>
                    </tr>
                </tbody>
            </table>
      </div>
      </div>
      <UserBilling />
    </div>
  </div>
  )
};

export default UserIdentity;
