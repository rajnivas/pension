import React from "react";

function UserActivity() {
  return (
    <div className="col-sm-5">
      <div className="card-7">

        <ul className="nav nav-tabs" role="tablist">
          <li ><a href="#activity" role="tab" data-toggle="tab"><b>Activity</b></a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="activity">
            <ul>
              <small className="title">This month</small>
              <li>
                <h6>
                  Address changed from <b>69 Morrison Street</b> to <b>96 Lothian Road</b><br />
                  <small>Changed on 20/09/2022 - 9:24PM</small>
                </h6>
              </li>
              <li>
                <h6>
                  New beneficiary <b>Namperumal</b> added<br />
                  <small>Added on 10/09/2022 - 7:12PM</small>
                </h6>
              </li>
              <li>
                <h6>
                  Mobile contact changed from <b>9600126xx</b> to <b>7497616xxx</b><br />
                  <small>Changed on 05/09/2022 - 11:30AM</small>
                </h6>
              </li>
            </ul>
            <ul>
              <small className="title">Last month</small>
              <li>
                <h6>
                  Pension value of <b>£1500</b> transfered from <b>Aegon</b><br />
                  <small>Received on 15/08/2022 - 7:59AM</small>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserActivity;
