import React from 'react';
import ProductRow from "./ProductRow"

function ProductTable(props){

    return (
      <div>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {props.productsToSend.map((product) => {
              return <ProductRow  key={product.id} {...product} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }


export default ProductTable
