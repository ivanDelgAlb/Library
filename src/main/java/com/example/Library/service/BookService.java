package com.example.Library.service;

import com.example.Library.model.Book;
import com.example.Library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book saveBook(Book book){
        return bookRepository.save(book);
    }

    public Book getBookById(Long id){
        return bookRepository.findById(id).orElse(null);
    }

    public List<Book> getBooksByAuthor(String author){
        return bookRepository.findAllByAuthor(author);
    }

    public void deleteBook(Long id){
        bookRepository.deleteById(id);
    }
}
