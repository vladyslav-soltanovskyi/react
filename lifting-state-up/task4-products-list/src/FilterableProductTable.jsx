import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleChange = ({ target }) => {
    const { type, value, checked } = target;
    const isCheckbox = type === 'checkbox';
    const propertyName = isCheckbox ? 'inStockOnly' : 'filterText';
    const propertyValue = isCheckbox ? checked : value;
    this.setState({ [propertyName]: propertyValue });
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          handleChange={this.handleChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;