import { Component, Injectable } from '@angular/core';
//para cnectarnos a un server web con los metodos http
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Persona } from './editar/Persona';



@Injectable({
  providedIn: 'root'
})
export class EditarService {
//private url:string="http://localhost:8080/personas/traer"; 
//inyectamos HttpClient para conectarnos via metodos HTTP a un server
constructor(private http: HttpClient) { 
  console.log('Servicio HTTP');
}

/*
retornar(){
  //fake api rest json data
//return this.http.get("https://jsonplaceholder.typicode.com/users");
return this.http.get("http://localhost:8080/personas/traer");
}  
*/

//metodo Get
//traer todos
retornar():Observable<Persona>{
//el observable y el tipo <Persona>
//son necesasrios en los metodos post,put,update,delete 
//en get casi no se utiliza ya que la que define los datos seria la clase de java en el backend
 return this.http.get<Persona>("https://portf0l1ow3b.herokuapp.com/personas/traer");
}  
//Endpoint del Backend
//traer por ID
private backendURL: string = "https://portf0l1ow3b.herokuapp.com/personas/traer";
obtenerPorId(pId: number): Observable<Persona>{
  return this.http.get<Persona>(`${this.backendURL}/${pId}`);
} 

//eliminar por ID
private backendURLEliminar: string = "https://portf0l1ow3b.herokuapp.com/personas/borrar";
eliminarPorId(peId: number): Observable<Persona>{
  return this.http.delete<Persona>(`${this.backendURLEliminar}/${peId}`);
} 
//eliminar info
private backendURLEliminarInfo: string = "https://portf0l1ow3b.herokuapp.com/personas/borrarInfo";
eliminarInfoPorId(peId: number): Observable<Persona>{
  return this.http.delete<Persona>(`${this.backendURLEliminarInfo}/${peId}`);
} 
//eliminar experiencia
private backendURLEliminarExperiencia: string = "https://portf0l1ow3b.herokuapp.com/personas/borrarExperiencia";
eliminarExpPorId(peId: number): Observable<Persona>{
  return this.http.delete<Persona>(`${this.backendURLEliminarExperiencia}/${peId}`);
} 
//eliminar educacion
private backendURLEliminarEducacion: string = "https://portf0l1ow3b.herokuapp.com/personas/borrarEducacion";
eliminarEducacionPorId(peId: number): Observable<Object>{
  return this.http.delete<Persona>(`${this.backendURLEliminarEducacion}/${peId}`);
} 
//para insertar datos a la base de datos 
//metodo POST
  enviar(pPersona: Persona): Observable<Object>{
    return this.http.post("https://portf0l1ow3b.herokuapp.com/personas/crear", pPersona);
  }
  //para editar datos de la base de datos 
//metodo PUT
private backendURLeditar: string = "https://portf0l1ow3b.herokuapp.com/personas/editarPortfolio";
editar(id:number,pPersona: String): Observable<Object>{
  return this.http.put(`${this.backendURLeditar}/${id}`, pPersona);
}
//editar experiencia
private backendURLeditarExperiencia: string = "https://portf0l1ow3b.herokuapp.com/personas/editarPortfolioExperiencia";
editarExperiencia(id:number,pPersona: String): Observable<Object>{
  return this.http.put(`${this.backendURLeditarExperiencia}/${id}`, pPersona);
}
//Editar educacion
//editar experiencia
private backendURLeditareditarEducacion: string = "https://portf0l1ow3b.herokuapp.com/personas/editarPortfolioEducacion";
editarEducacion(id:number,pPersona: String): Observable<Object>{
  return this.http.put(`${this.backendURLeditareditarEducacion}/${id}`, pPersona);
}


  //para login
//metodo POST
login(pPersona: Persona): Observable<Object>{
  return this.http.post("https://portf0l1ow3b.herokuapp.com/login", pPersona);
}


}
