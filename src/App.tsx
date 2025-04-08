import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import CardDetails, { HOC } from "./components/CardDetails";
import { TProductResponse } from "./typescript/product.interfaces";
import AxiosInstance from "./axios-instance/axiosInstance";
import { endpoints } from "./axios-instance/endpoints";

function App() {
  const [products, setProducts] = useState<TProductResponse>([]);
  const [value, setValue] = useState<number>(2);

  const handleOnChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(e.target.value))
  };

  const fetchApi = async () => {
    
    const res = await AxiosInstance.get(endpoints.product.list);
    setProducts(res.data);
    
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="flex flex-col  min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex  gap-2 flex-row">
        <Sidebar />

        <div>
          <HOC>
          <CardDetails id={value} />
          </HOC>
          <select
            onChange={handleOnChange}
            value={value}
            id="select"
          >
            {products.map((item) => (
              <option value={item.id}>{item.title}</option>
            ))}
          </select>

          <h1 className="text-8xl text-amber-50">{value}</h1>

          
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {products?.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item?.title}
              description={item?.description}
              rating={item.rating.rate}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;
