import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - In real app, fetch from Spring Boot API
  const mockProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      category: "Electronics",
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop&crop=center"
      ],
      rating: 4.8,
      reviews: 124,
      description: "Experience premium sound quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "Premium comfort padding",
        "Bluetooth 5.0 connectivity",
        "Quick charge feature"
      ],
      inStock: true,
      stock: 15
    }
  ];

  useEffect(() => {
    // Simulate API call
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    // In real app, this would add to cart state/context
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">Product not found.</p>
          <Link to="/products" className="btn-primary mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link 
          to="/products" 
          className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer ${
                    selectedImage === index ? 'ring-2 ring-blue-600' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300 dark:text-gray-600'
                  }`} 
                />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-300 ml-2">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">${product.price}</p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Key Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <p className="text-green-600 dark:text-green-400 font-medium">✓ In Stock ({product.stock} available)</p>
            ) : (
              <p className="text-red-600 dark:text-red-400 font-medium">✗ Out of Stock</p>
            )}
          </div>

          {/* Quantity and Actions */}
          {product.inStock && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-gray-800 dark:text-white">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded px-3 py-2"
                >
                  {[...Array(Math.min(10, product.stock))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary flex items-center space-x-2 flex-1"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="btn-secondary flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;