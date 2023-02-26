package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.MainEntity;
import com.example.demo.MainRepInt.MainRepInt;

@Service
public class updateService implements updateServiceInt 
{
	@Autowired
	private MainRepInt mri;
	
	@Override
	public void updateData(MainEntity me) 
	{
		mri.save(me);
	}

}
