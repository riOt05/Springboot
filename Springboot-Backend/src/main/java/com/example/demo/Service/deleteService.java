package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.MainRepInt.MainRepInt;

@Service
public class deleteService implements deleteServiceInt{

	@Autowired
	private MainRepInt mri;
	
	@Override
	public void deleteData(int pid) 
	{
		mri.deleteById(pid);
	}


}
