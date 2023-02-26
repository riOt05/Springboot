package com.example.demo.Controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController 
{
    @GetMapping("/")
    public String none()
    {
    	return "Please Select Any Of The Following Options : \n\n1)Get All The Fields\n2)Get All The Fields By Id\n"
    			+ "3)Insert A New Data\n4)Update An Existing Data\n5)Delete All The Fields By Id";
    }
}
