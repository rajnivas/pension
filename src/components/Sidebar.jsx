import React from "react";

function SideBar() {
  return (
    <div className="left">
      <ul>
        <li className="menu-heading">Dashboards</li>
        <li className="active"><a data-toggle="tab" href="#overview"><i className="fa fa-home fa-lg"></i>Account Overview</a></li>
        <li><a data-toggle="tab" href="#analytics"><i className="fa fa-files-o fa-lg"></i>Pension-Details</a></li>
        <li className="menu-heading">User-Area</li>
        <li><a data-toggle="tab" href="#user-profile"><i className="fa fa-street-view fa-lg"></i> User Profile</a></li>
        <li><a data-toggle="tab" href="#"><i className="fa fa-users fa-lg"></i> Beneficiaries</a></li>
        <li><a data-toggle="tab" href="#"><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>
      </ul>
    </div>
  )};

export default SideBar;
