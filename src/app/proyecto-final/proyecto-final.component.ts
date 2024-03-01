import { Component, ViewChild, Output, EventEmitter} from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule,CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})

export class ProyectoFinalComponent {
  userEdit = {
    Nombre: '',
    Descripcion: '',
    index: -1
  }
  users: any[] = []
  position: any = []
  
  @Output() userIdEmitted = new EventEmitter<number>(); // Event to emit the ID

  formulariouser:FormGroup = new FormGroup({
    nombre:new FormControl(''),
    descripcion:new FormControl('')
  })

  getId(id: number  ) {
    this.userIdEmitted.emit(id); // Emit the captured ID
    this.users.splice(id ,1);
    console.log('Elemento borrado correctamente')
  }

  ngOnInit() {            
    this.formulariouser = this.forms.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
    }

    constructor(public forms: FormBuilder){

    }

    submitForm() {
      let user = {
        ...this.formulariouser.value,
        position: this.position
      }
      if (this.formulariouser.valid) {
        if (this.userEdit.index >= 0) {
          this.users[this.userEdit.index] = user
          this.formulariouser.reset();
        } else {
          this.users.push(user);
          this.formulariouser.reset();
        }
      }
    }

    doxear(usuarios:any) {
      this.mapOptions = {
        ...this.mapOptions,
        center: usuarios.position
      }
    }

enviarDatos(value: any, index: number) {
  this.userEdit = {
    ...value, index
  }
  console.log(this.userEdit)
  this.formulariouser.reset();
  }


// Mapa
mapOptions: google.maps.MapOptions = {
  center: { lat: 38.9987208, lng: -77.2538699 },
  zoom : 14
}
marker = {
  position: { lat: 38.9987208, lng: -77.2538699 },
}

obtainCoords(event: any){
this.position = {
  lat: event.latLng.lat(),
  lng: event.latLng.lng()
    }
  }
}
