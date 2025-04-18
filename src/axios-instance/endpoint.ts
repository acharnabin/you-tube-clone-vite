
export const baseURL=import.meta.env.VITE_PUBLIC_API_BASE_URL

// process.env.VITE_PUBLIC_API_BASE_URL

export const endpoints={
    products:'/products',
    productDetails:(id:number)=>`/products/${id}`,
    auth:{
        login:'auth/login'
    },
    users:{
        list:"/users"
    }
}

