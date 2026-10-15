
import { Link } from "react-router-dom";

function OrderSuccess() {
  const order = JSON.parse(
    sessionStorage.getItem("trendora-last-order") || "null"
  );

  return (
    <main className="mx-auto max-w-2xl px-5 py-20 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
        ✓
      </div>

      <h1 className="mt-6 text-3xl font-bold">
        Thank you for your order!
      </h1>
      <p className="mt-3 text-gray-600">
        {order
          ? `Your demo order has been placed, ${order.customer.name}.`
          : "Your order confirmation page."}
      </p>

      {order && (
        <p className="mt-3 font-semibold">
          Order total: ₹{order.total.toLocaleString("en-IN")}
        </p>
      )}

      <Link
        to="/shop"
        className="mt-8 inline-block rounded-lg bg-pink-600 px-6 py-3 text-white hover:bg-pink-700"
      >
        Continue Shopping
      </Link>
    </main>
  );
}

export default OrderSuccess;
