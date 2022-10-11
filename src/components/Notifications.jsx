import React from "react";

function Notifications() {
  return (
    <li>
      <div className="btn-group dropleft dropdown-alert">
        <i className="fa fa-bell-o dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </i>
        <ul className="dropdown-menu">
          <li>
            <a href="#">
            <div className="alert-card">
              <i className="fa fa-check-circle fa-2x"></i>
              <p className="pull-right">
                Personal update <br />
                <small>Your address has been succesfully updated</small>
              </p>
            </div>
            </a>
          </li>
          <li>
            <a href="#">
            <div className="alert-card">
              <i className="fa fa-check-circle fa-2x"></i>
              <p className="pull-right">
                  Transaction update <br />
                  <small>Your personal pension transfer from Aegon is successful</small>
              </p>
            </div>
            </a>
          </li>
        </ul>
      </div>
   </li>
  )
};

export default Notifications;
