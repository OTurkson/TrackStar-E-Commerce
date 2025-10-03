# TrackStar E-Commerce Platform

A full-stack e-commerce application featuring a Spring Boot backend and React frontend with dark mode support.

## 🏗️ Architecture

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.x with Java
- **Database**: MySQL with JPA/Hibernate
- **Migration**: Flyway for database versioning
- **API**: RESTful endpoints with CORS support
- **Build Tool**: Maven

### Frontend (React + Vite)
- **Framework**: React 18 with Vite bundler
- **Styling**: Tailwind CSS with dark mode
- **Routing**: React Router for navigation
- **Icons**: Lucide React
- **HTTP Client**: Axios for API calls

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8.0+
- Maven 3.6+

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd storeapp
   ```

2. **Configure Database**
   - Create a MySQL database named `storedb`
   - Update `store/src/main/resources/application.yaml` with your database credentials

3. **Run the Spring Boot Application**
   ```bash
   cd store
   mvn spring-boot:run
   ```
   
   The backend will start on `http://localhost:8080`

### Frontend Setup

1. **Navigate to Frontend Directory**
   ```bash
   cd trackstar-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The frontend will start on `http://localhost:5173`

## 🔗 API Integration

The frontend is fully integrated with the Spring Boot backend through the following endpoints:

### Product Endpoints
- `GET /products` - Get all products
- `GET /products?categoryId={id}` - Get products by category
- `GET /products/{id}` - Get single product
- `POST /products` - Create new product
- `PUT /products/{id}` - Update product
- `DELETE /products/{id}` - Delete product

### User Endpoints
- `GET /users` - Get all users
- `GET /users/{id}` - Get single user
- `POST /users` - Register new user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user
- `PUT /users/{id}/change-password` - Change password

## 📊 Database Schema

### Products Table
- `id` (BIGINT, Primary Key)
- `name` (VARCHAR(255))
- `description` (TEXT)
- `price` (DECIMAL(10,2))
- `image_url` (VARCHAR(500))
- `stock_quantity` (INT)
- `rating` (DECIMAL(2,1))
- `review_count` (INT)
- `category_id` (TINYINT, Foreign Key)

### Categories Table
- `id` (TINYINT, Primary Key)
- `name` (VARCHAR(100))

### Users Table
- `id` (BIGINT, Primary Key)
- `email` (VARCHAR(255))
- `password` (VARCHAR(255))
- `profile` (User Profile data)

## ✨ Features

### Frontend Features
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🛒 **Product Catalog**: Browse products with filtering and search
- 🔍 **Product Details**: Detailed product views with ratings and stock info
- 🛍️ **Shopping Cart**: Add items to cart (UI ready)
- 👤 **User Authentication**: Login and registration forms (UI ready)

### Backend Features
- 🔒 **CORS Configuration**: Configured for frontend integration
- 📝 **Data Validation**: Input validation and error handling
- 🗄️ **Database Migrations**: Automated schema management with Flyway
- 🔄 **RESTful APIs**: Well-structured REST endpoints
- 📊 **Sample Data**: Pre-loaded with realistic product data

## 🎨 Sample Data

The application comes with pre-loaded sample data including:
- **6 Categories**: Electronics, Fashion, Sports, Home & Garden, Books, Beauty
- **12 Products**: Each with high-quality images from Unsplash
- **Real Images**: Professional product photos with proper URLs
- **Ratings & Reviews**: Realistic rating data and review counts
- **Stock Management**: Proper inventory tracking

## 🛠️ Development

### Backend Development
```bash
cd store
mvn clean compile          # Compile the application
mvn test                   # Run tests
mvn spring-boot:run        # Start development server
```

### Frontend Development
```bash
cd trackstar-frontend
npm run dev                # Start development server
npm run build              # Build for production
npm run preview            # Preview production build
```

## 🔧 Configuration

### Backend Configuration (`application.yaml`)
```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/storedb
    username: your_username
    password: your_password
```

### Frontend Configuration
The frontend automatically connects to `http://localhost:8080` for API calls. This can be modified in `src/services/api.js`.

## 📝 API Testing

The backend APIs have been tested with Postman. You can test the endpoints using:

- **GET** `http://localhost:8080/products` - Get all products
- **GET** `http://localhost:8080/users` - Get all users

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file: `mvn clean package`
2. Run the JAR: `java -jar target/store-0.0.1-SNAPSHOT.jar`

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Icons by [Lucide](https://lucide.dev)
- UI framework by [Tailwind CSS](https://tailwindcss.com)

---

**TrackStar E-Commerce** - Built with ❤️ using Spring Boot and React