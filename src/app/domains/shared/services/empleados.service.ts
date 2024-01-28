import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  
  

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`http://localhost:8080`);
  }

  getEmpleado(id:number) : Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`http://localhost:8080/${id}`);
  }
}
