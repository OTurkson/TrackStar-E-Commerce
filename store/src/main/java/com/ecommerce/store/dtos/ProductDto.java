package com.ecommerce.store.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ProductDto {
    private Long id;
    private String name;
    private Double price;
    private String description;
    private Byte categoryId;
}
