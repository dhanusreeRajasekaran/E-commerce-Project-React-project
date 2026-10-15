
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const category = params.get("category") || "All";

  const filtered = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "All" || product.category === category
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <main className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="text-3xl font-bold">Shop All Products</h1>
      <p className="mt-2 text-gray-500">Find your next favourite item.</p>

      <div className="my-8 grid gap-4 md:grid-cols-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="rounded-lg border bg-white px-4 py-3"
        />

        <select
          value={category}
          onChange={(e) => setParams(e.target.value === "All" ? {} : { category: e.target.value })}
          className="rounded-lg border bg-white px-4 py-3"
        >
          <option value="All">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Footwear">Footwear</option>
          <option value="Accessories">Accessories</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border bg-white px-4 py-3"
        >
          <option value="default">Default sorting</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <p className="mb-5 text-sm text-gray-500">
        {filtered.length} product(s) found
      </p>

      {filtered.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-gray-500">
          No products match your search.
        </p>
      )}
    </main>
  );
}

export default Shop;
