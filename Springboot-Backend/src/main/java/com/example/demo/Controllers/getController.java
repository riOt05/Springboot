package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.MainEntity;
//import com.example.demo.Service.MainService;
import com.example.demo.Service.getService;

@RestController
public class getController 
{
	 @Autowired
	 private getService ms;
	 
	 @GetMapping({"/1","/GetAll"})
	    public List<MainEntity> getdetails()
	    {
	    	return ms.getdata();
	    }
	    
	    @GetMapping({"/2","/GetById"})
	    public MainEntity getbyid(int pid)
	    {
	    	return ms.getbyid(pid);
	    }
}
