package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.MainEntity;
import com.example.demo.Service.insertService;
//import com.example.demo.Service.MainService;

@RestController
public class insertController 
{
	@Autowired
    private insertService ms;
	
	  @PostMapping({"/3","Insert"})
	    public void saveDetails(@RequestBody MainEntity me)
	    {
	    	ms.saveData(me);
	    }
}
