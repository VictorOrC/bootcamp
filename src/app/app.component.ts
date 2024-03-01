import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoFinalComponent } from './proyecto-final/proyecto-final.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerDiaComponent, SegundoDiaComponent, TercerDiaComponent, RouterModule, ProyectoFinalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dinamico = 'Soy el hijo del papa';
  dinamico2 = 5;
}
