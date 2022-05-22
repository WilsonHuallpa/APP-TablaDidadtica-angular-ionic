import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../shared/usuarios.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  uid: string = null;
  info: Usuario = null;
  rol: string = null;
  logo: string = null;
  idioma: string = "españa";

  dato: string[] = ["uno","dos","tres","cuatro"];

  numSpania: string[]= ["uno","dos","tres","cuatro"]; 
  numPortugal: string[]= ["um","dois","três","quatro"]; 
  numIngles: string[]= ["one","two","three","four"]; 

  imgApp: string[] = ["../../assets/1.png","dos../../assets/2.png","../../assets/3.png","../../assets/4.png"];

  imgNum: string[]= ["../../assets/1.png","dos../../assets/2.png","../../assets/3.png","../../assets/4.png"]; 
  imgAnimales: string[]= ["../../assets/caballo.jpg","../../assets/leon.jpg","../../assets/aguila.jpg","../../assets/elefante.jpeg"]; 
  imgColores: string[]= ["../../assets/rojo.png","../../assets/azul.png","../../assets/verde.png","../../assets/amarillo.png"]; 


  constructor(private auth: UsuariosService, private firestore: FirestoreService) {
    this.logo = "logo-facebook";
    this.auth.stateUser().subscribe(res => {
      if(res){
        console.log("esta logeado");
        this.getDatosUser(res.uid);
      }else{
        console.log(" no esta logeado");
      }
    })
  }
  async getDatosUser(uid: string){
    const path = 'usuarios';
    const id = uid;
    this.firestore.getDoc<Usuario>(path, id).subscribe( res =>{
      if(res){
        this.info = res;
        console.log(this.info.perfil);
      }else{
        console.log("error");
      }
    });
  }
  async getNombreLogo(logo: string){
    this.logo = logo;
  }
  
  seleccionarIdioma(idioma: string){

      switch(idioma){
        case "españa":
          this.dato = this.numSpania;
          break;
        case "portugal":
          this.dato = this.numPortugal;
          break;
        case "reinoUnido":
          this.dato = this.numIngles;
          break;      
    }
  }
  seleccionarImagen(tema: string){

      switch(tema){
        case "colores":
          this.imgApp = this.imgColores;
          break;
        case "animales":
          this.imgApp = this.imgAnimales;
          break;
        case "numeros":
          this.imgApp = this.imgNum;
          break;      
        }
  }
}
