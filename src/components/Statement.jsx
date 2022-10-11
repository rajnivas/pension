import React from "react";

function Statement() {
  return (
    <div className="row invoice-task">
      <div className="col-sm-12">
        <div className="invoice">
          <div className="table-responsive">
            <table className="table">
              <h5>Statement <small className="pull-right"><a href="#">View all Transactions</a></small></h5>
              <tbody>
                <tr>
                  <td>21/09/22</td>
                  <td>HMRC Tax</td>
                  <td>Refund</td>
                  <td><button className="btn btn-warning btn-sm pull-right">PENDING</button></td>
                  <td>£225</td>
                </tr>
                <tr>
                  <td>15/08/22</td>
                  <td>Contribution</td>
                  <td>One-off</td>
                  <td><button className="btn btn-success btn-sm pull-right">PAID</button></td>
                  <td>£1,245</td>
                </tr>
                <tr>
                  <td>05/09/22</td>
                  <td>Employer Contribution</td>
                  <td>Monthly</td>
                  <td><button className="btn btn-success btn-sm pull-right">PAID</button></td>
                  <td>£150</td>
                </tr>
                <tr>
                  <td>05/09/22</td>
                  <td>Employee Contribution</td>
                  <td>Monthly</td>
                  <td><button className="btn btn-success btn-sm pull-right">PAID</button></td>
                  <td>$150</td>
                </tr>
                <tr>
                  <td>25/08/22</td>
                  <td>Pension Transfer</td>
                  <td>One-off</td>
                  <td><button className="btn btn-success btn-sm pull-right">PAID</button></td>
                  <td>$1500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Statement;
