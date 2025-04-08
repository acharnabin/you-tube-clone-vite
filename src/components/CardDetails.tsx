
import React, { useEffect, useState } from "react";
import { IProductObj } from "../typescript/product.interfaces";
import AxiosInstance from "../axios-instance/axiosInstance";
import { endpoints } from "../axios-instance/endpoints";

interface ICardDetailsProps {
    id:number
}

const CardDetails:React.FC<ICardDetailsProps> = ({id}) => {
  const [details, setDetails] = useState<null | IProductObj>(null);

  const fetchProductDetails = async () => {
    try {
      const res = await AxiosInstance.get(endpoints.product.details(id));
      setDetails(res.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
    

  }, [id]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-8xl ">{id}</h1>
      {/* Image Section */}
      <div className="relative w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
        {details?.image ? (
          <img src={details.image} alt={details.title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-gray-800">{details?.title || "Loading..."}</h1>
        <p className="text-gray-600">{details?.description || "No description available."}</p>
        <p className="text-gray-700 font-medium">
          Rating: <span className="font-bold">{details?.rating?.rate ?? "N/A"}</span>
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
