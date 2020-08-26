import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  private baseUrl = 'https://employeemsfrontend.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.http.get(`${this.baseUrl}`+ `/employeelist`, {headers});
  }

  deleteEmployee(emp_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employeelist/${emp_id}`, { responseType: 'text' });
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/addemployee`, employee);
  }

  getHeaders(){
    let username='admin'
    let password='password'

    let  basicString='Basic '+window.btoa(username + ':' + password)
    return basicString;
  }

}