import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})

export class PrimerDiaComponent {
  @Input() ejemplo:string = ''
  @Input() usuario:number = 0
  
  card = {
    title: 'Titulo Principal',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequuntur alias aspernatur debitis obcaecati aliquid at velit fugiat quas dolore quos pariatur reiciendis tenetur, enim provident? At omnis quibusdam iste.'
  }
}
