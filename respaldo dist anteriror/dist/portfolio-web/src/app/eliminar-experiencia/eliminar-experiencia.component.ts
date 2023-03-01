import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-experiencia',
  templateUrl: './eliminar-experiencia.component.html',
  styleUrls: ['./eliminar-experiencia.component.css']
})
export class EliminarExperienciaComponent implements OnInit {

 
  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosenviados: string;
  pDatosEliminados: string;

  constructor(private  EditarService: EditarService,  private router: Router) {}
  
  ngOnInit() {}
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
     
    commitUser(){
     //propiedad pPersona almacena el objeto instancia de Persona 
     //po lo tanto desde el form se reciben todos los tipos de datos que se definen en la class
     //si se ocupa  propiedades especificas de la class en el service se asigna el tipo de datos  
     //en este caso es number y String
     //si se ocupa todas las propiedades aqui se declara el objeto pPersona
     //y en en el service tambien el objeto
     //si no coloco el id donde quiero actualizar  el dato
     //inserta una nueva
     //se podria actualizar pidiendo DNI envez de id
     this.EditarService.eliminarExpPorId(this.pPersona.id).subscribe( 
        //userData =>{
        //  console.log(userData)});
        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEliminados="Datos Eliminados";
 }
  
 
 displayStyle = "block";
  

 closePopup() {
   this.displayStyle = "none";
   this.router.navigate(['/']);
 }

}
