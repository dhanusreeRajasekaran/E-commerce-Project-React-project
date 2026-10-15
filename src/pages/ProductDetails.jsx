
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div className="p-12 text-center">Product not found.</div>;
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <Link to="/shop" className="text-pink-600">← Back to Shop</Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[550px] w-full rounded-2xl object-cover"
        />

        <div className="py-4">
          <p className="text-sm uppercase tracking-widest text-pink-600">
            {product.category}
          </p>
          <h1 className="mt-3 text-4xl font-bold">{product.name}</h1>
          <p className="mt-5 text-3xl font-bold">₹{product.price}</p>
          <p className="mt-6 leading-7 text-gray-600">
            {product.description}
          </p>
          <p className="mt-5 text-sm text-green-700">
            Available to order
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 w-full rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-pink-600"
          >
            Add to Cart
          </button>

          <Link
            to="/cart"
            className="mt-4 block text-center font-semibold text-pink-600"
          >
            Go to Cart →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
