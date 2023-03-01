import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editarexperiancialaboral',
  templateUrl: './editarexperiancialaboral.component.html',
  styleUrls: ['./editarexperiancialaboral.component.css']
})
export class EditarexperiancialaboralComponent implements OnInit {

  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosEditados: string;

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
     this.EditarService.editarExperiencia(this.pPersona.id,this.pPersona.experiencia).subscribe( 
        //userData =>{
        //  console.log(userData)});
        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEditados="Datos Editados";
 }
  
  displayStyle = "block";
  

  closePopup() {
    this.displayStyle = "none";
    this.router.navigate(['/']);
  }


}
