import { useEffect, useState } from "react";
import "./App.css";
// import Card from './components/Card'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { API_URL } from "./constants";

 type TProductResponse = IProductObj[]

 interface IProductObj {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

 interface Rating {
  rate: number
  count: number
}

function App() {
  const [products, setProducts] = useState<TProductResponse>([]);



  const fetchApi = async () => {
    const res = await axios.get(API_URL);

    setProducts(res.data);
  };

  // When component mounts
  useEffect(() => {
    fetchApi();

   
  }, []);

  return (
    <>
      <Header />
      {products?.map((item) => (
        <Sidebar
          image={item.image}
          name={item?.title}
          description={item?.description}
          rating={item.rating.rate}
        />
      ))}
    </>
  );
}

export default App;
