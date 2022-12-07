package com.genspringboot.proyect.repository;

import org.springframework.data.repository.CrudRepository;

import com.genspringboot.proyect.model.User;

public interface UserRepository extends CrudRepository <User, Integer>{
    
}
