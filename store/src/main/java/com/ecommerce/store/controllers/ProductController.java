package com.ecommerce.store.controllers;

import com.ecommerce.store.dtos.ProductDto;
import com.ecommerce.store.entities.Product;
import com.ecommerce.store.mappers.ProductMapper;
import com.ecommerce.store.repositories.CategoryRepository;
import com.ecommerce.store.repositories.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.math.BigDecimal;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/products")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class ProductController {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;
    private final CategoryRepository categoryRepository;

    //    Get all products in a particular category
    @GetMapping
    public Iterable<ProductDto> getAllProducts(@RequestParam(required = false, name = "categoryId") Byte categoryId) {
        List<Product> products;

        if  (categoryId == null) {
            products = productRepository.findAllWithCategory();
        } else {
            products = productRepository.findByCategoryId(categoryId);
        }
        return products
                .stream()
                .map(productMapper::toDto)
                .toList();
    }

//    Get single product by its ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) {
        var product = productRepository.findById(id).orElse(null);
        if  (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productMapper.toDto(product));
    }

//    Creating a new product
    @PostMapping
    public ResponseEntity<ProductDto> createProduct(
            @RequestBody ProductDto request,
            UriComponentsBuilder uriBuilder
            ) {

        // Check if categoryId is provided
        if (request.getCategoryId() == null) {
            return ResponseEntity.badRequest().build();
        }

        var category = categoryRepository.findById(request.getCategoryId()).orElse(null);
        if (category == null) {
            return ResponseEntity.badRequest().build();
        }

        var product = productMapper.toEntity(request);
        product.setCategory(category);
        
        // Set default values if not provided
        if (product.getStockQuantity() == null) {
            product.setStockQuantity(0);
        }
        if (product.getRating() == null) {
            product.setRating(BigDecimal.valueOf(0.0));
        }
        if (product.getReviewCount() == null) {
            product.setReviewCount(0);
        }
        
        productRepository.save(product);

        var uri = uriBuilder.path("/products/{id}").buildAndExpand(product.getId()).toUri();
        
        // Return the complete created product data from database
        ProductDto createdProductDto = productMapper.toDto(product);
        return ResponseEntity.created(uri).body(createdProductDto);
    }

//    Update a product
    @PutMapping("/{id}")
    public ResponseEntity<ProductDto> updateProduct(
            @PathVariable Long id,
            @RequestBody ProductDto request
    ) {
        var product = productRepository.findById(id).orElse(null);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }

        // Only update category if categoryId is provided
        if (request.getCategoryId() != null) {
            var category = categoryRepository.findById(request.getCategoryId()).orElse(null);
            if (category == null) {
                return ResponseEntity.badRequest().build();
            }
            product.setCategory(category);
        }

        // Update product fields only if they are provided
        if (request.getName() != null) {
            product.setName(request.getName());
        }
        if (request.getDescription() != null) {
            product.setDescription(request.getDescription());
        }
        if (request.getPrice() != null) {
            product.setPrice(BigDecimal.valueOf(request.getPrice()));
        }
        if (request.getImageUrl() != null) {
            product.setImageUrl(request.getImageUrl());
        }
        if (request.getStockQuantity() != null) {
            product.setStockQuantity(request.getStockQuantity());
        }
        if (request.getRating() != null) {
            product.setRating(BigDecimal.valueOf(request.getRating()));
        }
        if (request.getReviewCount() != null) {
            product.setReviewCount(request.getReviewCount());
        }
        
        productRepository.save(product);
        
        // Return the complete updated product data from database
        ProductDto updatedProductDto = productMapper.toDto(product);
        return ResponseEntity.ok(updatedProductDto);
    }

//    Delete a product
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(
            @PathVariable Long id
    ) {
        var product = productRepository.findById(id).orElse(null);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        productRepository.delete(product);

        return ResponseEntity.noContent().build();
    }
}
