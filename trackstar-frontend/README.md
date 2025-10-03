# TrackStar E-Commerce Frontend

A modern React + Vite frontend application for the TrackStar e-commerce platform.

## Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive components
- **Product Management**: Browse products, view details, filter by category and price
- **Shopping Cart**: Add/remove items, update quantities, view totals
- **User Authentication**: Login and registration forms (UI only)
- **Clean UI**: Beautiful, professional design with smooth animations

## Project Structure

```
trackstar-frontend/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   └── Footer.jsx     # Footer component
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Homepage with hero and features
│   │   ├── Products.jsx  # Product listing with filters
│   │   ├── ProductDetail.jsx # Individual product page
│   │   ├── Cart.jsx      # Shopping cart
│   │   ├── Login.jsx     # Login form
│   │   └── Register.jsx  # Registration form
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles with Tailwind
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd trackstar-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Integration with Spring Boot Backend

The frontend is configured to proxy API requests to your Spring Boot backend running on `http://localhost:8080`. 

### API Integration Points

Update these components to connect with your Spring Boot API:

1. **Products.jsx** - Replace mock data with API calls to fetch products
2. **ProductDetail.jsx** - Fetch individual product details
3. **Login.jsx** - Implement authentication with your `/api/auth/login` endpoint
4. **Register.jsx** - Implement user registration with your `/api/auth/register` endpoint
5. **Cart.jsx** - Connect cart operations with backend cart management

### Example API Integration

```javascript
// Example of fetching products
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  fetchProducts();
}, []);
```

## Styling

The project uses **Tailwind CSS** for styling:

- Responsive design with mobile-first approach
- Custom color scheme with blue primary colors
- Reusable component classes defined in `index.css`
- Icons from **Lucide React**

## Key Components

### Navbar
- Responsive navigation with mobile menu
- Shopping cart icon with item count
- User authentication links

### Home Page
- Hero section with call-to-action
- Features showcase
- Featured products grid

### Products Page
- Product grid with filtering
- Category and price range filters
- Product cards with ratings and pricing

### Product Detail Page
- Image gallery
- Product information and features
- Add to cart functionality
- Quantity selection

### Shopping Cart
- Item management (add/remove/update quantities)
- Order summary with calculations
- Responsive layout

## Customization

### Colors
Update `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',  // Change primary color
        600: '#your-color',
        700: '#your-color',
      }
    }
  }
}
```

### Logo and Branding
- Update the logo in `Navbar.jsx` and `Footer.jsx`
- Modify the site title in `index.html`
- Replace favicon in the `public` directory

## Next Steps

1. **Connect to Backend API**: Replace mock data with real API calls
2. **Add State Management**: Consider Redux or Context API for complex state
3. **Add Authentication**: Implement JWT token handling
4. **Add More Features**: Search, wishlist, user profile, order history
5. **Testing**: Add unit tests with Jest and React Testing Library
6. **Performance**: Implement lazy loading and optimization

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

## License

This project is part of the TrackStar E-Commerce application.