import { Component, Injectable, OnInit } from '@angular/core';
import { EditarService} from './editar.service';
import { Persona } from './editar/Persona';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  title = 'PortfolioWeb';
  
pPersona:Persona=new Persona();
 
pDatos:any;
  displayStyle: string;
  

  constructor(private  pPersonaService: EditarService) {
  
    console.log('El componente se ha creado');
    }
     

    ngOnInit(): void {
      console.log('El componente se ha iniciadp');
      //traer todos los campos
      //this.pPersonaService.retornar().
      //subscribe(r=>{this.pDatos=r});

         //traer campos especificos
         this.pPersonaService.retornar().
      subscribe(r=>{this.pDatos=r});
    }



        }
    
      
        
        
         
  


