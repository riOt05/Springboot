package com.example.demo.MainRepInt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.SignupEntity;

@Repository
public interface SignupRepInt extends JpaRepository<SignupEntity,Integer>{

}
