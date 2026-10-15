
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12">
      {/* About Hero Section */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-widest text-pink-600">
            About Trendora
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Discover Your Style, Define Your Trend
          </h1>

          <p className="mt-6 leading-7 text-gray-600">
            Welcome to Trendora, your destination for stylish clothing,
            footwear, and accessories. We believe fashion is a way to
            express your personality and confidence.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Our collection brings together everyday essentials and
            fashionable pieces to help you create your own unique look.
            We aim to make online shopping simple, enjoyable, and
            convenient.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-block rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Explore Our Collection
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
          alt="Trendora fashion collection"
          className="h-80 w-full rounded-2xl object-cover md:h-96"
        />
      </section>

      {/* Our Mission */}
      <section className="mt-16 rounded-2xl bg-pink-50 px-6 py-12 text-center md:px-16">
        <h2 className="text-3xl font-bold">Our Mission</h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
          Our mission is to provide a convenient online shopping
          experience with a variety of fashion products, an easy-to-use
          website, and a smooth journey from browsing products to
          placing an order.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold">
          Why Choose Trendora?
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="text-4xl">👗</div>
            <h3 className="mt-4 text-xl font-bold">
              Fashionable Collection
            </h3>
            <p className="mt-3 leading-6 text-gray-600">
              Explore clothing, footwear, and accessories for different
              styles and occasions.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="text-4xl">🛍️</div>
            <h3 className="mt-4 text-xl font-bold">
              Easy Shopping
            </h3>
            <p className="mt-3 leading-6 text-gray-600">
              Browse products, view details, manage your cart, and
              complete the demo checkout with ease.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <div className="text-4xl">✨</div>
            <h3 className="mt-4 text-xl font-bold">
              Your Unique Style
            </h3>
            <p className="mt-3 leading-6 text-gray-600">
              Find products that help you express your personal style
              and everyday fashion preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-2xl bg-gray-900 px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">
          Find Your Next Favourite Look
        </h2>

        <p className="mt-4 text-gray-300">
          Explore the Trendora collection and discover your style.
        </p>

        <Link
          to="/shop"
          className="mt-6 inline-block rounded-lg bg-pink-600 px-6 py-3 font-semibold hover:bg-pink-700"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}

export default About;
