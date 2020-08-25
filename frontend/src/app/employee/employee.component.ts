import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService} from '../service/httpclient.service';
import { Employee } from '../employee';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Observable<Employee[]>;;

  @Input() employee: Employee;
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
     this.reloadData();
     console.log(this.employees);
  }

  handleSuccessfulResponse(response)
  {
      this.employees=response;
  }
  reloadData() {
    this.employees = this.httpClientService.getEmployees();
  }

  deleteEmployee(empId) {
    this.httpClientService.deleteEmployee(empId)
      .subscribe(
        data => {
          this.ngOnInit();
        },
        error => console.log(error));
       
  }


}