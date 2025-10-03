# Sample Product API Requests

## POST Requests (Create New Products)

### Test 1: LeBron 23s (Minimal Required Fields)
```json
{
  "name": "LeBron 23s",
  "description": "Latest LeBron James signature basketball shoes with advanced cushioning and support",
  "price": 199.99,
  "categoryId": 3,
  "imageUrl": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop&crop=center"
}
```

## Test 2: Dashiki (With Optional Fields)
```json
{
  "name": "Traditional Dashiki",
  "description": "Authentic African print dashiki shirt with vibrant colors and traditional patterns",
  "price": 45.99,
  "categoryId": 2,
  "imageUrl": "https://images.unsplash.com/photo-1594736797933-d0d7ee7a8632?w=500&h=500&fit=crop&crop=center",
  "stockQuantity": 25,
  "rating": 4.7,
  "reviewCount": 12
}
```

## Test 3: Complete Product Example
```json
{
  "name": "Nike Air Max",
  "description": "Classic Nike Air Max sneakers with visible air cushioning and modern design",
  "price": 129.99,
  "categoryId": 3,
  "imageUrl": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop&crop=center",
  "stockQuantity": 15,
  "rating": 4.5,
  "reviewCount": 89
}
```

## PUT Requests (Update Existing Products)

### Update Product Name and Price Only
**URL**: `PUT http://localhost:8080/products/{id}`
```json
{
  "name": "Updated LeBron 23s Pro",
  "price": 249.99
}
```

### Update Product Image Only
**URL**: `PUT http://localhost:8080/products/{id}`
```json
{
  "imageUrl": "https://images.unsplash.com/photo-1608667508764-6ada5dd19a58?w=500&h=500&fit=crop&crop=center"
}
```

### Update Product with New Category
**URL**: `PUT http://localhost:8080/products/{id}`
```json
{
  "name": "LeBron 23s Basketball Shoes",
  "description": "Updated description with new features",
  "price": 229.99,
  "categoryId": 3,
  "stockQuantity": 50,
  "rating": 4.8,
  "reviewCount": 127
}
```



## How to Test with Postman

### POST Request (Create Product)
1. **Method**: POST
2. **URL**: `http://localhost:8080/products`
3. **Headers**: 
   - Content-Type: application/json
4. **Body**: Use one of the POST JSON examples above

### PUT Request (Update Product)
1. **Method**: PUT
2. **URL**: `http://localhost:8080/products/1` (replace 1 with actual product ID)
3. **Headers**: 
   - Content-Type: application/json
4. **Body**: Use one of the PUT JSON examples above

## Category IDs Reference
- 1: Electronics
- 2: Fashion  
- 3: Sports
- 4: Home & Garden
- 5: Books
- 6: Beauty

## Expected Behavior
- If `stockQuantity`, `rating`, or `reviewCount` are not provided, they will default to 0
- All other fields are required
- The API will return the created product with an assigned ID