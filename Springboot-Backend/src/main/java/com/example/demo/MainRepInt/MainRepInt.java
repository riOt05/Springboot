package com.example.demo.MainRepInt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.MainEntity;

@Repository
public interface MainRepInt extends JpaRepository<MainEntity,Integer>
{

}
