import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
