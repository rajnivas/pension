import React from "react";

function Overview(props) {
  return (
    <div className="row graph-cards">
      <div className="col-sm-4">
        <div>
          <h4>Next Premium for Policy ADSxx657xx<br /><small>Due on Oct 10th</small></h4>
          <h2>£55/month <br /></h2>
          <img src={"images/pensionreminder.png"} className="img-responsive" alt="" />
        </div>
      </div>
      <div className="col-sm-4">
        <div>
          <h4>Total POT value <br /><small>In 15 Years</small></h4>
          <h2>£{props.PotValue.toFixed(2)} <br /><small>Last Month you’ve accumulated £1,180</small></h2>
          <img src="images/moneygrowing.png" className="img-responsive" alt="" />
        </div>
      </div>
      <div className="col-sm-4">
        <div>
          <h4>Year On Year growth <br /><small>Last 5 years</small></h4>
          <img src="images/pensionpot.png" alt="" />
        </div>
      </div>
  </div>
  )
};

export default Overview;
