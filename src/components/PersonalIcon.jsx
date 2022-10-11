import React from "react";

function PersonalIcon() {
  return (
    <li>
      <div className="btn-group dropleft dropdown-avatar">
        <img src={"images/user avatar.png"} className="img-circle img-responvie"/><i className="fa fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
        <ul className="dropdown-menu">
          <li><a href="#">Edit Personal details</a></li>
          <li><a href="#">View Account activity</a></li>
          <li><a href="#">Manage Nominees</a></li>
        </ul>
      </div>
    </li>
  )
};

export default PersonalIcon;
