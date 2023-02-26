package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.SignupEntity;
import com.example.demo.MainRepInt.SignupRepInt;

@Service
public class SignupService implements SignupServiceInt {

	@Autowired
	private SignupRepInt sri;

	public void addData(SignupEntity me)
	{
		sri.save(me);
	}

}
