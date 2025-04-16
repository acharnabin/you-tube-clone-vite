import React, { useEffect, useState } from 'react'
import { TProductResponse } from '../typescript/product.interfaces';
import AxiosInstance from '../axios-instance/axiosIntance';
import { endpoints } from '../axios-instance/endpoint';
import Card from '../components/Card';

const Home = () => {
    const [products, setProducts] = useState<TProductResponse>([]);


    const fetchApi = async () => {
      // fakestore.com/products
      const res = await AxiosInstance.get(endpoints.products);
      setProducts(res.data);
    };
  
    useEffect(() => {
      fetchApi();
    }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {products?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item?.title}
            description={item?.description}
            rating={item.rating.rate}
          />
        ))}
      </div>
  )
}

export default Home