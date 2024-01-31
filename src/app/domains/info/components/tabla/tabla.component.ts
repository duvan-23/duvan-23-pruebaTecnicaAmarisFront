import { Component, Input, SimpleChanges, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { EmpleadosService } from '@shared/services/empleados.service';
import { Empleado } from '@shared/models/empleado.model';


import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule,MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})

export class TablaComponent {
  @Input ({required: false}) id!: number ;
  empleados = signal<Empleado[]>([]);
  private empleadoService = inject(EmpleadosService);
	filter = new FormControl('', { nonNullable: true });
 
  displayedColumns: string[] = ['id', 'nombre', 'salario', 'edad', 'imagen', 'salarioAnual'];
  dataSource:MatTableDataSource<Empleado>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.getEmpleados(); 
    this.dataSource = new MatTableDataSource<Empleado>( this.empleados());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  ngOnChanges(changes: SimpleChanges) {
    const id = changes['id'];
    if (id && id.currentValue !== id.previousValue) {
      console.log("entro change");
      
      if (this.id && this.id >0) {
        this.getEmpleado();
      }else{
         this.getEmpleados();  
      }
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