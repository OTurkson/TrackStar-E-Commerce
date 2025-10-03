import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter } from 'lucide-react';
import { productApi } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productApi.getAllProducts();
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        // Fallback to mock data if API fails
        const mockProducts = [
          {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 199.99,
            categoryName: "Electronics",
            imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
            rating: 4.8,
            description: "High-quality wireless headphones with noise cancellation."
          },
          {
            id: 2,
            name: "Smart Fitness Watch",
            price: 299.99,
            categoryName: "Electronics",
            imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
            rating: 4.6,
            description: "Track your fitness goals with this advanced smartwatch."
          }
        ];
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryName === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, products]);

  const categories = ['all', ...new Set(products.map(product => product.categoryName || product.category).filter(Boolean))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Products</h1>
        <p className="text-gray-600 dark:text-gray-300">Discover our amazing collection of products</p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <Filter className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Filters</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price Range
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Prices</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-300">$100 - $300</option>
              <option value="300">$300+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="text-gray-600 dark:text-gray-300">Loading products...</div>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <div className="text-red-600 dark:text-red-400">{error}</div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-600 dark:text-gray-300">No products found matching your criteria.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card p-6">
              <img 
                src={product.imageUrl || product.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center'} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="mb-2">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  {product.categoryName || product.category || 'General'}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{product.description}</p>
              <div className="flex items-center mb-3">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">{product.rating}</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">${product.price}</p>
              <Link 
                to={`/products/${product.id}`}
                className="btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
};

export default Products;