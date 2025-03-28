import { useEffect, useState } from "react";
import "./App.css";
// import Card from './components/Card'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import axios from "axios";


export type TProductResponse = IProductObj[]

export interface IProductObj {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export interface IRating {
  rate: number
  count: number
}


function App() {
  const [products, setProducts] = useState<TProductResponse>([]);

  const fetchData = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products, "products");

  return (
    <>
      <Header />
      {products?.map((item) => (
        <Sidebar image={item.image} name={item?.title} description={item?.description} rating={item.rating.rate} />
      ))}
    </>
  );
}

export default App;
