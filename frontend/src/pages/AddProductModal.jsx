import { useState, useEffect } from "react";


export default function AddProductModal({
  isOpen,
  onClose,
  onSubmit,
  product,
}) {
  const [name, setName] = useState(product?.name || "");
  const [disc, setDisc] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || "");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setDisc(product.description || "");
      setPrice(product.price || "");
      setPreview(
        product.image ? `data:image/jpeg;base64,${product.image}` : "",
      );
    }
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!name || !price) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", disc);

    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);
    reset();
  };

  const reset = () => {
    setName("");
    setPrice("");
    setDisc("");
    setImage(null);
    setPreview("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-lg font-semibold mb-4">Add Product</h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-500">
            Product Image
          </label>

          <input type="file" accept="image/*" onChange={handleImage} />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-3 w-full h-40 object-cover rounded-xl"
            />
          )}
        </div>

        {/* Name */}
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black"
        />
        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-xl bg-black text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
