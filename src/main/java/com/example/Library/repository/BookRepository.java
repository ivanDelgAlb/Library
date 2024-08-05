package com.example.Library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Library.model.Book;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findAllByAuthor(String author);
}
