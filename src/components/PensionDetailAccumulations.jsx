import React from "react";

function PensionDetailAccumulations(props) {
  return (

      <div className="row total-stats">
        <div className="col-sm-3">
          <div className="stats-card">
            <span className="orange-chart">
              <i className="fa fa-line-chart fa-lg"></i>
            </span>
            <h3>£{props.PotValue.toFixed(2)} <small><i className="fa fa-caret-up"></i></small><br />
              <small>TOTAL POT VALUE</small>
            </h3>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="stats-card">
            <span className="purple-chart">
              <i className="fa fa-pie-chart fa-lg"></i>
            </span>
            <h3>£1,190 <small><i className="fa fa-caret-up"></i></small><br />
              <small>MONTHLY ACCRUAL</small>
            </h3>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="stats-card">
            <span className="red-chart">
              <i className="fa fa-pie-chart fa-lg"></i>
            </span>
            <h3>{props.TotalPolicies} <small><i className="fa fa-caret-up"></i></small><br />
              <small>TOTAL PENSIONS</small>
            </h3>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="stats-card">
            <span className="green-chart">
              <i className="fa fa-pie-chart fa-lg"></i>
            </span>
            <h3>£{((props.PotValue * 0.05 )/100).toFixed(2)}<small><i className="fa fa-caret-up"></i></small><br />
              <small>MONTHLY FEES</small>
            </h3>
          </div>
        </div>
      </div>

  )
};

export default PensionDetailAccumulations;
