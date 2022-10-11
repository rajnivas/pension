import React from "react";

function UserBilling() {
  return (
    <div className="card-5 billing">
      <h4>Billing</h4>
      <div className="row billing-row">
        <div className="col-sm-6"><i className="fa fa-credit-card"></i> Ending **** 5896</div>
        <div className="col-sm-3 text-right">05 / 19	</div>
        <div className="col-sm-3 text-right text-gray">VISA</div>
      </div>
      <hr />
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>Account creation</td>
              <td>Standard Payment</td>
              <td>19 Jan 2021</td>
            </tr>
            <tr>
              <td>Monthly fees</td>
              <td>30-Days Recuring</td>
              <td>19 Feb 2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default UserBilling;
