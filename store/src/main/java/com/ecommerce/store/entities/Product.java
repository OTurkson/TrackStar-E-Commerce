package com.ecommerce.store.entities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "stock_quantity", nullable = false, columnDefinition = "INT DEFAULT 0")
    @Builder.Default
    private Integer stockQuantity = 0;

    @Column(name = "rating", columnDefinition = "DECIMAL(2,1) DEFAULT 0.0")
    @Builder.Default
    private BigDecimal rating = BigDecimal.valueOf(0.0);

    @Column(name = "review_count", columnDefinition = "INT DEFAULT 0")
    @Builder.Default
    private Integer reviewCount = 0;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "category_id")
    private Category category;
}