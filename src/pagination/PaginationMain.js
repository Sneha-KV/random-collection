import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import PaginationBar from "./PaginationBar";
import "./pagination.css";

/**
 * Pagination implementation
 * - Get data + items / page (10) api: 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
 * - Display data
 * - create pagination bar
 *   - Click to go to page
 *   - < and > to navigate pages
 *   - Change products based on page number
 * - Additonal things
 *   - Handle no products usecase
 *   - Highlight selected/ current page
 *   - Add try catch block arround async
 */
const PaginationMain = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const pageLimit = 10;

  const getProducts = async () => {
    const apiData = await fetch("https://dummyjson.com/products?limit=200");
    const productsCatalog = await apiData.json();
    setProducts(productsCatalog.products);
    setNoOfPages(Math.ceil(productsCatalog.products.length / pageLimit));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="pagination-main">
      <h1>Pagination</h1>
      {
        products.length === 0 && <div>No products available</div>
      }
      {noOfPages > 0 && <PaginationBar current={current} setCurrent={setCurrent} noOfPages={noOfPages}/>}
      <div className="products-container">
        {products
          .slice(current * pageLimit, current * pageLimit + pageLimit)
          .map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default PaginationMain;
