
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-pink-600">
              New Collection
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Discover Your Style
            </h1>
            <p className="mt-4 text-gray-600">
              Explore clothing, footwear and accessories for everyday life.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-pink-600"
            >
              Explore Shop
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Fashion collection"
            className="h-80 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="mt-2 text-gray-500">Our picks for your wardrobe.</p>
          </div>
          <Link to="/shop" className="font-semibold text-pink-600">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <h2 className="mb-5 text-2xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["Men", "Women", "Footwear", "Accessories"].map((category) => (
            <Link
              key={category}
              to={`/shop?category=${category}`}
              className="rounded-xl bg-pink-50 p-8 text-center font-bold hover:bg-pink-100"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
