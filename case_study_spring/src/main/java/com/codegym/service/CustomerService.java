package com.codegym.service;

import com.codegym.model.Customer;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    List<Customer> findAll();
    Optional<Customer> findById(Long id);
    Customer save(Customer customer);
    void remove(Long id);
    List<Customer> findByName(String name, Pageable pageable);
}
