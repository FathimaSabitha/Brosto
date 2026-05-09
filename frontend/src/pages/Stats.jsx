import { useQuery } from "@tanstack/react-query";
import API from "../api/api";


export default function Stats() {
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const token = localStorage.getItem("token");

      const res = await API.get("/products/my-products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      <Stat title="Products" value={data.length} />
      <Stat title="Revenue" value="₹0" />
      <Stat title="Orders" value="0" />
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-3xl font-bold text-gray-900 mt-2">
        {value}
      </h2>
    </div>
  );
}