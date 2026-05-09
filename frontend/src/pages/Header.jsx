import API from "../api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export default function Header() {
  const queryClient = useQueryClient();
  const  {data: products = [], isLoading} = useQuery({
    queryKey:["header"],
    queryFn: async () => {
  const token = localStorage.getItem("token");

  const res = await API.get("/products/header", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
},
  })


  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">{products[0]?.ownerName}</h1>
      <p className="text-gray-500">Welcome back</p>
    </div>
  );
}