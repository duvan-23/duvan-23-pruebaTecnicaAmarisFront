import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { EmpleadosService } from '@shared/services/empleados.service';
import { Empleado } from '@shared/models/empleado.model';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})

export class TablaComponent {
  @Input ({required: false}) id!: number ;
  empleados = signal<Empleado[]>([]);
  private empleadoService = inject(EmpleadosService);
	filter = new FormControl('', { nonNullable: true });
  
	constructor() {}
  ngOnChanges() {
    if (this.id && this.id >0) {
      this.getEmpleado();
    }else{
       this.getEmpleados();  
    }
  }
  private getEmpleados() {
    this.empleadoService.getEmpleados()
    .subscribe({
      next: (empleados) =>{
        this.empleados.set(empleados);
      },
      error: (e)=>{
        console.log(e);
      }
    })
  }

  private getEmpleado() {
    if (this.id  && this.id>0) {
      this.empleadoService.getEmpleado(this.id)
      .subscribe({
        next: (empleados) =>{
          this.empleados.set(empleados) ;
        },
        error: (e)=>{
          console.log(e);
        }
      })
    }
    
  }

}