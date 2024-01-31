import { CommonModule } from '@angular/common';
import { Component, signal  } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaComponent } from '@info/components/tabla/tabla.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TablaComponent, HeaderComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	id = signal(0);
	inputBuscar = new FormControl('',[Validators.pattern("^[0-9]*$")]);
	isValid = signal(true);
  constructor(private snackBarRef: MatSnackBar) {}
  buscar(){
    this.isValid.set(this.inputBuscar.valid);
    if(this.isValid()){
      this.id.set(Number(this.inputBuscar.value));
    }else{
      this.snackBarRef.open("Error Ingrese un valor númerico", "Cerrar",
      { duration:2000});

    }
  }
}
