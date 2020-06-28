import React from "react";
import Axios from "axios";

function Home({ products }) {
  console.log(products);
  // React.useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = "http://localhost:3000/api/products";
  //   const response = await Axios.get(url);
  //   console.log(response.data);
  // }

  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = "http://localhost:3000/api/products";
  const response = await Axios.get(url);
  return { products: response.data };
};

export default Home;
