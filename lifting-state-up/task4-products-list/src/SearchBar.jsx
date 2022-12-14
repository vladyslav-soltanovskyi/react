import React from "react";

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;