export const baseURL=import.meta.env.VITE_PUBLIC_API_BASE_URL

//REACT/Node / next js =>  process.env.VITE_PUBLIC_API_BASE_URL

export const endpoints={
   product:{
    list:'/products',
    details:(id:number)=>`/products/${id}`
   },
   profile:{}
}