package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.MainEntity;
import com.example.demo.MainRepInt.MainRepInt;

@Service
public class getService implements getServiceInt
{
	@Autowired
	private MainRepInt mri;  
	
	@Override
	public List<MainEntity> getdata() 
	{
		return mri.findAll();
	}
	
	@Override
	public MainEntity getbyid(int pid)   
	{
		return mri.findById(pid).get();
	} 

}
