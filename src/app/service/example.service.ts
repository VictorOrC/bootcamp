import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  var_service = "Titulo Epixo";
  api_url = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) {}
  obtenerLista(){
    return this.http.get(`${this.api_url}posts`)
  }
  onclickbutton(text: string) {
    console.log(text)
    this.var_service = text
  }
  agregarLista(body:string, title:string){
    return this.http.post(`${this.api_url}posts`,{
        id: 10,
        title: title,
        body: body,
        userId: 11
    })
  }
  borrarLista(){
    return this.http.delete(`${this.api_url}posts/1`)
  }
}
