package com.codegym.service.impl;

import com.codegym.model.CustomerType;
import com.codegym.repository.CustomerTypeRepository;
import com.codegym.service.CustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeServiceImpl implements CustomerTypeService {

    @Autowired
    private CustomerTypeRepository repository;

    @Override
    public List<CustomerType> findAll() {
        return repository.findAll();
    }
}
