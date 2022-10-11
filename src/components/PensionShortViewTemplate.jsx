import React from "react";

function add(accumulator, a) {
  return accumulator + a;
}

function PensionShortViewTemplate(props) {
  let EmployerText = "";
  let ActiveText = "";
  if (!props.Employer)
  EmployerText = "Personal " ;
  if (props.Active)
  ActiveText = "Active | ";
  return (
 <div className="col-sm-3">
  <div className="card">
    <h5>Policy {props.Policy}<br /> <small><b className="text-red"> {ActiveText} </b> {props.Provider}</small></h5>
    <div className="row">
      <div className="col-sm-6">
        <h6>Policy value<br /><b>{(props.Funddetails.map(function(element) {
                                                          return (element.Units * element.UnitPrice);
                                                        })).reduce(add).toFixed(2)}</b></h6>
      </div>
      <div className="col-sm-6">
        <h6>{EmployerText}{props.Employer}<br /><small>Start: {props.Start}</small></h6>
      </div>
    </div>
  </div>
</div>
)};

export default PensionShortViewTemplate;
