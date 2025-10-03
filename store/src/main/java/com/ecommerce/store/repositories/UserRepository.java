package com.ecommerce.store.repositories;

import com.ecommerce.store.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User getUsersById(Long id);
}