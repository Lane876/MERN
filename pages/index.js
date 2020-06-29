import React from "react";
import Axios from "axios";
import ProductList from "../components/Index/ProductList";

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  const url = "http://localhost:3000/api/products";
  const response = await Axios.get(url);
  return { products: response.data };
};

export default Home;
