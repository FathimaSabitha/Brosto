import AddProductButton from "./AddProductButton";
import Header from "./Header";
import ProductList from "./ProductList";
import ShopLink from "./ShopLink";
import Stats from "./Stats";



export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Header />

        <div className="mt-6">
          <Stats />
        </div>

        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            My Products
          </h2>

          <AddProductButton />
        </div>

        <div className="mt-4">
          <ProductList />
        </div>
      </div>
    </div>
  );
}