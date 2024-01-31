import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref, RouterLinkActive,MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  url:string = '';
  urlBack:string = 'https://github.com/duvan-23/duvan-23-pruebaTecnicaAmarisBack';
  urlFront:string = 'https://github.com/duvan-23/duvan-23-pruebaTecnicaAmarisFront';
  @Input ({required: true}) titulo!: string ;

  codigoFuente(tipo:number, event: MouseEvent){
    this.url = tipo == 1?  this.urlBack: this.urlFront;
    window.open(this.url, '_blank');
    event.preventDefault();
  }
  
}
