package com.javainuse.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "employee")
public class Employee {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private long empId;

        @Column(name = "name")
        private String name;

        @Column(name = "designation")
        private String designation;

        @Column(name = "salary")
        private double salary;

	public Employee() {
        }

        public Employee(long empId,String name, String designation, double salary) {
          this.empId = empId;
          this.name = name;
          this.designation = designation;
          this.salary = salary;
        }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}
        
        public long getEmpId() {
		return empId;
	}

	public void setEmpId(long salary) {
		this.empId = empId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((designation == null) ? 0 : designation.hashCode());
                result = prime * result + (int) (empId ^ (empId >>> 32));
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		long temp;
		temp = Double.doubleToLongBits(salary);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		if (designation == null) {
			if (other.designation != null)
				return false;
		} else if (!designation.equals(other.designation))
			return false;
		if (empId == 0) {
			if (other.empId != 0)
				return false;
		}
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (Double.doubleToLongBits(salary) != Double.doubleToLongBits(other.salary))
			return false;
		return true;
	}
        
        @Override
        public String toString() {
          return "Employee [empid=" + empId + ", name=" + name + ", designation=" + designation + ", salary=" + salary + "]";
        }

}
