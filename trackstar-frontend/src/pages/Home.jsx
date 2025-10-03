import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, Star } from 'lucide-react';
import { productApi } from '../services/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await productApi.getAllProducts();
        // Take first 3 products as featured
        setFeaturedProducts(response.data.slice(0, 3));
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        // Fallback to static data if API fails
        setFeaturedProducts([
          {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 199.99,
            imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
            rating: 4.8
          },
          {
            id: 2,
            name: "Smart Fitness Watch",
            price: 299.99,
            imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
            rating: 4.6
          },
          {
            id: 3,
            name: "Stylish Backpack",
            price: 79.99,
            imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
            rating: 4.7
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">TrackStar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover amazing products at unbeatable prices
            </p>
            <Link 
              to="/products" 
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center space-x-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Why Choose TrackStar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Fast Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">Free shipping on orders over $50. Get your items delivered quickly and safely.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Secure Shopping</h3>
              <p className="text-gray-600 dark:text-gray-300">Your data is protected with industry-leading security measures.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Quality Products</h3>
              <p className="text-gray-600 dark:text-gray-300">Carefully curated selection of high-quality products from trusted brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Featured Products
          </h2>
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-600 dark:text-gray-300">Loading featured products...</div>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <div className="text-red-600 dark:text-red-400">{error}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="card p-6 bg-white dark:bg-gray-800">
                  <img 
                    src={product.imageUrl || product.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center'} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                      {product.rating || 4.5}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    ${product.price}
                  </p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="btn-primary w-full text-center block"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="btn-secondary inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;