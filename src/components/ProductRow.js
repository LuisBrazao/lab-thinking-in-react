import React from "react";

function ProductRow(props) {
    let color = "black";
    if(!props.stocked){
        color = "red"
    }
    return (
        <tr>
            <td style={{color: color}}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
  );
}

export default ProductRow;
