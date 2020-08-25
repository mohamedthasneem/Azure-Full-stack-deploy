import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false

  constructor(
    private HttpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }
 
  save() {
    this.HttpClientService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}