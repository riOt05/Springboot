package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.MainEntity;
import com.example.demo.Service.updateService;

@RestController
public class updateController 
{
	@Autowired
	 private updateService ms;
	
    @RequestMapping({"/4","Update"})
    public void updateDetails(@RequestBody MainEntity me,@RequestParam int pid)
    {
    	me.setPid(pid);
    	ms.updateData(me);
    }
}
