package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface BookRepository extends JpaRepository<book, Integer> {
}
