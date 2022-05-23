package com.codegym.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CustomerType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCustomerType;
    private String nameType;

    @OneToMany(mappedBy = "customerType", cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<Customer> customers;

    public CustomerType() {
    }

    public Long getIdCustomerType() {
        return idCustomerType;
    }

    public void setIdCustomerType(Long idCustomerType) {
        this.idCustomerType = idCustomerType;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

    public Set<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<Customer> customers) {
        this.customers = customers;
    }
}
