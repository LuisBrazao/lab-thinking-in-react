import React from 'react';

class SearchBar extends React.Component {
  state = {
    search: '',
    stock: true,
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
          this.props.changeProducts(this.state.search);
      }
    );
  };

  handleChangeCheckbox = (event) => {
    let {name, value, type} = event.target
    if(type === "checkbox"){
        value = event.target.checked;
    }
    this.setState({
        [name]: value
    },
    () => {
        this.props.changeStock(this.state.stock)
    })  
}

  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <label>Only show products in stock</label>
        <input
          type="checkbox"
          name="stock"
          value={this.state.stock}
          onChange={this.handleChangeCheckbox}
        />
      </div>
    );
  }
}

export default SearchBar;
