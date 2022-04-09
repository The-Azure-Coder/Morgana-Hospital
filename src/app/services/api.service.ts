import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postAppointment(data: any) {
    return this.http.post<any>("http://localhost:3000/appointmentList/", data);
  }

  getAppointment() {
    return this.http.get<any>("http://localhost:3000/appointmentList/");
  }

  deleteAppointment(id: number) {
    return this.http.delete<any>('http://localhost:3000/appointmentList/' + id)
  }

  putAppointment(id: number, data: any) {
    return this.http.put<any>('http://localhost:3000/appointmentList/' + id, data)

  }
}
