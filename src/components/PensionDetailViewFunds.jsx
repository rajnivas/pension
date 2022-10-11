import React from "react";

function PensionDetailViewFunds(props) {

  const FundValue = (props.Units * props.UnitPrice );
  return (
    <tr>
      <td>{props.FundName}</td>
      <td>{props.Units.toFixed(2)}</td>
      <td>{props.UnitPrice.toFixed(2)}</td>
      <td>{FundValue.toFixed(2)}</td>
    </tr>
  )
};

export default PensionDetailViewFunds;
