# Test PUT Request Examples

## ✅ These PUT requests now return COMPLETE product data:

### 1. Update only name and price
**Request:**
```bash
curl -X PUT http://localhost:8080/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated LeBron 23s Pro",
    "price": 249.99
  }'
```

**Response:** (Returns complete product, not just the fields you sent)
```json
{
  "id": 1,
  "name": "Updated LeBron 23s Pro",
  "price": 249.99,
  "description": "Latest LeBron James signature basketball shoes...",
  "imageUrl": "https://images.unsplash.com/photo-1552346154-21d32810aba3...",
  "stockQuantity": 15,
  "rating": 4.8,
  "reviewCount": 124,
  "categoryId": 3,
  "categoryName": "Sports"
}
```

### 2. Update only image URL
```bash
curl -X PUT http://localhost:8080/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "imageUrl": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop&crop=center"
  }'
```

### 3. Update multiple fields
```bash
curl -X PUT http://localhost:8080/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "LeBron 23s Basketball Shoes",
    "price": 229.99,
    "stockQuantity": 50,
    "rating": 4.8
  }'
```

### 4. Update with new category
```bash
curl -X PUT http://localhost:8080/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "LeBron 23s Pro Edition",
    "categoryId": 3,
    "stockQuantity": 25  
  }'
```

## How it works now:
- ✅ Only fields provided in the JSON will be updated
- ✅ Missing fields will keep their current database values  
- ✅ No more "description cannot be null" errors
- ✅ Partial updates work properly
- **🆕 RETURNS COMPLETE PRODUCT DATA** - Response includes ALL fields from database, not just what you sent!