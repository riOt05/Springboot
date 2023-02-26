package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="crud_opr")
public class MainEntity
{
	@Id
	@Column(name="pid")
	private int pid;
	
	@Column(name="brand")
	private String brand;
	
	@Column(name="model")
	private String model;
	
	@Column(name="price")
	private int price;
	
	@Column(name="series")
	private String series;

	public MainEntity() 
	{
		super();
	}

	public MainEntity(int pid, String brand, String model, int price, String series) {
		super();
		this.pid = pid;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.series = series;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getSeries() {
		return series;
	}

	public void setSeries(String series) {
		this.series = series;
	}

	@Override
	public String toString() {
		return "MainEntity [pid=" + pid + ", brand=" + brand + ", model=" + model + ", price=" + price + ", series="
				+ series + "]";
	}
	
	
}
