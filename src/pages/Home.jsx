import { useEffect, useState } from "react";
import {  getBooks } from "../lib/books.request";
import { ItemListContainer } from "../components";
import { Loader } from "../components/Loader/Loader";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  //Poner en efectos peticiones o cosa asincromas

  useEffect(() => {
    // cargarData();
    getBooks().then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, []);

  // useEffect(() => {

  //   console.log(products)

  // }, [products])

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      )}
    </div>
  );
};
