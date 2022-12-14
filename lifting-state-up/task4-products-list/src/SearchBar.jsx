import React from "react";

function SearchBar({ filterText, inStockOnly, changeFilterText, changeInStockOnly }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={changeFilterText}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={changeInStockOnly}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;