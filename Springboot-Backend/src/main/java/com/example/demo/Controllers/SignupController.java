package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.SignupEntity;
import com.example.demo.Service.SignupService;

@RestController
public class SignupController 
{
	@Autowired
	private SignupService ss;
	
	@PostMapping("/adduser")
	 public void saveDetails(@RequestBody SignupEntity me)
    {
    	ss.addData(me);
    }
}
