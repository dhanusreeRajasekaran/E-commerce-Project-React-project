
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
        />
      </Link>

      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 text-lg font-semibold hover:text-pink-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-xl font-bold">₹{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full rounded-lg bg-gray-900 py-2 text-white hover:bg-pink-600"
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="mt-3 block text-center text-sm text-pink-600"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;

