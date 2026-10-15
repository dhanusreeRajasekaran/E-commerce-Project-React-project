
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) return;

    const order = {
      customer,
      items: cart,
      total,
      orderDate: new Date().toISOString(),
    };

    sessionStorage.setItem("trendora-last-order", JSON.stringify(order));
    clearCart();
    navigate("/order-success");
  }

  if (cart.length === 0) {
    return (
      <main className="p-12 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link to="/shop" className="mt-4 inline-block text-pink-600">
          Return to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

        <input
          required
          placeholder="Full name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          className="w-full rounded-lg border px-4 py-3"
        />

        <input
          required
          type="email"
          placeholder="Email address"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          className="w-full rounded-lg border px-4 py-3"
        />

        <textarea
          required
          placeholder="Delivery address"
          value={customer.address}
          onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
          className="w-full rounded-lg border px-4 py-3"
        />

        <input
          required
          placeholder="City"
          value={customer.city}
          onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
          className="w-full rounded-lg border px-4 py-3"
        />

        <input
          required
          inputMode="numeric"
          pattern="[0-9]{6}"
          title="Enter a 6-digit PIN code"
          placeholder="6-digit PIN code"
          value={customer.pincode}
          onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
          className="w-full rounded-lg border px-4 py-3"
        />

        <button className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700">
          Place Demo Order
        </button>
        <p className="text-sm text-gray-500">
          Demo only. No payment will be collected.
        </p>
      </form>

      <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-bold">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="mb-4 flex justify-between gap-4">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="mt-5 flex justify-between border-t pt-5 text-xl font-bold">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </aside>
    </main>
  );
}

export default Checkout;
