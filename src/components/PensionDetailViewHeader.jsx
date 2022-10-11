import React from "react";
import PensionDetailViewFunds from "./PensionDetailViewFunds";



function PensionDetailViewHeader(props){
  let EmployerText = "";
  let ActiveText = "";
  if (props.Employer)
  EmployerText = "Employer - " ;
  else EmployerText = "Personal " ;
  if (props.Active)
  ActiveText = "Active | ";
  return (
    <div className="col-sm-6">
      <div className="income-customers">
        <div className="table-responsive">
          <h4>Policy {props.Policy} <small className="pull-right"> <b className="text-red"> {ActiveText} </b> {props.Provider} | {EmployerText} {props.Employer}</small></h4>
          <table className="table">
            <tbody>
              <tr>
                <td><b>Fund Name</b></td>
                <td><b>Units</b></td>
                <td><b>Fund Unitprice(£)</b></td>
                <td><b>Fund Value(£)</b></td>
              </tr>
              {props.Funddetails.map((Funddetails) => (
                <PensionDetailViewFunds FundName= {Funddetails.FundName}
                                        Units= {Funddetails.Units}
                                        UnitPrice= {Funddetails.UnitPrice} />
                                      ))};
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default PensionDetailViewHeader;
