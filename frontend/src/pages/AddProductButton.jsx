import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddProductModal from "./AddProductModal";
import API from "../api/api";

export default function AddProductButton() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      return API.post("/products/add", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });



  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
      >
        + Add Product
      </button>

      <AddProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={(data) => mutation.mutate(data)}
      />
    </>
  );
}
