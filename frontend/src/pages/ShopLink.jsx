export default function ShopLink() {
  const slug = localStorage.getItem("shopSlug");

  if (!slug) return null;

  const link = `${window.location.origin}/shop/${slug}`;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <p className="text-gray-500 text-sm">Your Shop Link</p>
      <p className="font-medium text-gray-900 break-all">{link}</p>

      <button
        onClick={() => navigator.clipboard.writeText(link)}
        className="mt-3 text-sm bg-gray-900 text-white px-3 py-1.5 rounded-lg"
      >
        Copy Link
      </button>
    </div>
  );
}