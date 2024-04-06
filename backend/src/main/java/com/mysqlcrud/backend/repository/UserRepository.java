package com.mysqlcrud.backend.repository;

import com.mysqlcrud.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
