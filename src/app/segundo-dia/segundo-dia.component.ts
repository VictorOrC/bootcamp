import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {
  variable = ''
  btn_class="btn btn-success"
  name = ''
  descripcion = ''

  formulariouser:FormGroup = new FormGroup({
    name:new FormControl(''),
    description:new FormControl('')
  })

  user = [
    {
      name:'Luis',
      descricion:'Hola'
    },
    {
      name:'Luis 1',
      descricion:'Hola'
    },
    {
      name:'Luis 2',
      descricion:'Hola'
    },
    {
      name:'Luis 3',
      descricion:'Hola'
    },
    {
      name:'Luis 4',
      descricion:'Hola'
    },
  ]

  constructor(){
   // console.log("Se ejecute el constructor");
  }

  ngOnInit() {
    // console.log("Se inicio el componente")
  }

  ngDoCheck(): void {
    // console.log("Se ejecuto docheck")
  }

  ckickButton(text:string){
    this.variable = text
  }

  ngOnDestroy() {
    // console.log("Se ejecuto el ondestroy")
  }

  submitForm() {
    console.log(this.formulariouser.value);

    // console.log("el nombre es -->", this.name, "la descripcion es -->", this.descripcion)
  }
}
