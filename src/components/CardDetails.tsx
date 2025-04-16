import React, { useEffect, useState } from "react";
import { IProductObj } from "../typescript/product.interfaces";
import AxiosInstance from "../axios-instance/axiosIntance";
import { endpoints } from "../axios-instance/endpoint";
import { Icon } from "@iconify/react";
import { useNavigate, useParams } from "react-router";



const CardDetails = () => {
  const [details, setDetails] = useState<null | IProductObj>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const Params=useParams()
  const navigate=useNavigate()
  const [isSuccess,setIsSucess]=useState(false)

 

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const res = await AxiosInstance.get(endpoints.productDetails(Number(Params?.id)));
      setDetails(res.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Something went wrong while loading the product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [Params?.id]);

  if (loading) {
    return <div className="p-8 text-center text-gray-500 text-sm">Loading product...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500 font-medium">{error}</div>;
  }

  if (!details) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 ">

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image */}

        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img
            src={details.image}
            alt={details.title}
            className="object-contain max-h-64 w-full"
          />

{
isSuccess?<div>dsds</div>:"fghjk"
      }
        </div>

        {/* Content */}
        <div className="md:col-span-2 flex flex-col justify-between p-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">{details.title}</h2>
              {details.category && (
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1 capitalize">
                  <Icon icon="mdi:tag-outline" className="w-4 h-4" />
                  {details.category}
                </span>
              )}
            </div>

            <p className=" text-sm leading-relaxed">
              {details.description || "No description available."}
            </p>

            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Icon icon="mdi:currency-usd" className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700 text-lg">${details.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Icon icon="mdi:star" className="w-5 h-5 text-yellow-500" />
                <span>{details.rating?.rate ?? "N/A"} / 5</span>
                <span className="text-xs text-gray-400">({details.rating?.count ?? 0} reviews)</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 rounded-lg text-sm font-medium">
              Buy Now
            </button>
            <button onClick={()=>{
              navigate(-1)
            }} className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 rounded-lg text-sm font-medium">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HOC = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-gray-700 text-lg font-semibold">Inside HOC Layout</div>
        {children}
      </div>
    </div>
  );
};

export default CardDetails;
