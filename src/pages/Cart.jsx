
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, changeQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow-sm">
          <p className="text-gray-500">Your cart is empty.</p>
          <Link to="/shop" className="mt-5 inline-block text-pink-600">
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => changeQuantity(item.id, -1)}
                    className="rounded bg-gray-100 px-3 py-1"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => changeQuantity(item.id, 1)}
                    className="rounded bg-gray-100 px-3 py-1"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block rounded-lg bg-pink-600 py-3 text-center font-semibold text-white hover:bg-pink-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
