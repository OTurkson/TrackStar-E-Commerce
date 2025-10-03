-- Add image support to products table
ALTER TABLE products ADD COLUMN image_url VARCHAR(500) NULL;
ALTER TABLE products ADD COLUMN stock_quantity INT DEFAULT 0 NOT NULL;
ALTER TABLE products ADD COLUMN rating DECIMAL(2,1) DEFAULT 0.0 NULL;
ALTER TABLE products ADD COLUMN review_count INT DEFAULT 0 NULL;

-- Insert sample categories
INSERT INTO categories (name) VALUES 
('Electronics'),
('Fashion'),
('Sports'),
('Home & Garden'),
('Books'),
('Beauty');

-- Insert sample products with real image URLs from Unsplash
INSERT INTO products (name, description, price, category_id, image_url, stock_quantity, rating, review_count) VALUES
-- Electronics
('Premium Wireless Headphones', 'Experience premium sound quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.', 199.99, 1, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center', 15, 4.8, 124),
('Smart Fitness Watch', 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.', 299.99, 1, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center', 8, 4.6, 89),
('Professional Camera', 'Capture stunning photos with this professional DSLR camera featuring 24MP sensor and 4K video recording.', 899.99, 1, 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop&crop=center', 5, 4.9, 67),
('Wireless Earbuds', 'True wireless earbuds with premium sound quality and active noise cancellation. Perfect for music and calls.', 149.99, 1, 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop&crop=center', 25, 4.5, 156),

-- Fashion
('Stylish Backpack', 'Durable and stylish backpack perfect for daily use, made with premium materials and featuring multiple compartments.', 79.99, 2, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center', 20, 4.7, 93),
('Cozy Winter Sweater', 'Comfortable and warm merino wool sweater perfect for cold days. Available in multiple colors and sizes.', 89.99, 2, 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop&crop=center', 30, 4.4, 78),
('Designer Sunglasses', 'Stylish UV protection sunglasses with polarized lenses and durable frame construction.', 129.99, 2, 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop&crop=center', 12, 4.6, 45),
('Premium Leather Jacket', 'Genuine leather jacket with classic design, perfect for any season. Handcrafted with attention to detail.', 299.99, 2, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop&crop=center', 8, 4.8, 34),

-- Sports
('Running Shoes', 'Lightweight running shoes designed for optimal performance with advanced cushioning and breathable mesh upper.', 129.99, 3, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&crop=center', 18, 4.5, 112),
('Yoga Mat Premium', 'High-quality non-slip yoga mat with extra thickness for comfort during workouts and meditation.', 49.99, 3, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop&crop=center', 35, 4.7, 89),
('Basketball', 'Official size basketball with premium leather construction, perfect for indoor and outdoor play.', 39.99, 3, 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop&crop=center', 22, 4.3, 67),
('Fitness Dumbbell Set', 'Adjustable dumbbell set perfect for home workouts, includes multiple weight plates and secure locking mechanism.', 199.99, 3, 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center', 10, 4.6, 43);