package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.deleteService;

@RestController
public class deleteController 
{
	@Autowired
    private deleteService ms;
	
    @DeleteMapping({"/5","Delete"})
    public void deleteDetails(@RequestParam int pid)
    {
    	ms.deleteData(pid);
    }
}
