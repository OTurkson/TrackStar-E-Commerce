package com.ecommerce.store.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDto {
    private Long id;
    private String name;
    private Double price;
    private String description;
    private String imageUrl;
    private Integer stockQuantity;
    private Double rating;
    private Integer reviewCount;
    private Byte categoryId;
    private String categoryName;
}
