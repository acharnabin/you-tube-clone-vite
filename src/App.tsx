import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { API_URL } from "./constants";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";

type TProductResponse = IProductObj[];

interface IProductObj {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

function App() {
  const [products, setProducts] = useState<TProductResponse>([]);

  const fetchApi = async () => {
    const res = await axios.get(API_URL);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="flex flex-col  min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex  gap-2 flex-row">
      <Sidebar  />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {products?.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item?.title}
              description={item?.description}
              rating={item.rating.rate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
