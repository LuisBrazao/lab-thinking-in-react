import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  state = {
    products: this.props.products.data,
    filteredProducts: this.props.products.data
  };


  changeProductsHandler = (string) => {
    let newProducts;
    if (string === '') {
      newProducts = this.state.products;
    }
    newProducts = this.state.products.filter((product) => {
      return product.name.toLowerCase().includes(string.toLowerCase());
    });
    this.setState({
      filteredProducts: newProducts,
    });
  };

  changeStock = (boolean) => {
    let newProducts;
    if(boolean){
        newProducts = this.state.products.filter((product) => {
            return product.stocked;
          });
    }else{
        newProducts = this.state.products
    }
    this.setState({
      filteredProducts: newProducts,
    });
  };


  render() {
    let productsToSend;
    if (!this.state.filteredProducts.length) {
      productsToSend = this.state.products;
    } else {
      productsToSend = this.state.filteredProducts;
    }
    return (
      <div>
        <SearchBar changeProducts={this.changeProductsHandler} changeStock={this.changeStock}/>
        <ProductTable productsToSend={productsToSend} />
      </div>
    );
  }
}

export default FilterableProductTable;
