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

  changeFilterText = ({ target }) => this.setState({ filterText: target.value });
  
  changeInStockOnly = ({ target }) => this.setState({ inStockOnly: target.checked });

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          changeFilterText={this.changeFilterText}
          changeInStockOnly={this.changeInStockOnly}
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