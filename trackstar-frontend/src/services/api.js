import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product API calls
export const productApi = {
  // Get all products
  getAllProducts: () => api.get('/products'),
  
  // Get products by category
  getProductsByCategory: (categoryId) => api.get(`/products?categoryId=${categoryId}`),
  
  // Get single product by ID
  getProductById: (id) => api.get(`/products/${id}`),
  
  // Create new product
  createProduct: (productData) => api.post('/products', productData),
  
  // Update product
  updateProduct: (id, productData) => api.put(`/products/${id}`, productData),
  
  // Delete product
  deleteProduct: (id) => api.delete(`/products/${id}`),
};

// User API calls
export const userApi = {
  // Get all users
  getAllUsers: () => api.get('/users'),
  
  // Get user by ID
  getUserById: (id) => api.get(`/users/${id}`),
  
  // Register new user
  registerUser: (userData) => api.post('/users', userData),
  
  // Update user
  updateUser: (id, userData) => api.put(`/users/${id}`, userData),
  
  // Delete user
  deleteUser: (id) => api.delete(`/users/${id}`),
  
  // Change password
  changePassword: (id, passwordData) => api.put(`/users/${id}/change-password`, passwordData),
};

export default api;