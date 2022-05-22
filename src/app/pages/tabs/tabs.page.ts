import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/shared/usuarios.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  uid: string = null;
  info: Usuario = null;
  rol: string = null;

  constructor(private auth: UsuariosService, private router: Router, private firestore: FirestoreService) {
    this.auth.stateUser().subscribe(res => {
      if(res){
        console.log("esta logeado");
        this.getDatosUser(res.uid);
      }else{
        console.log(" no esta logeado");
      }
    })
   }

  ngOnInit() {
  }

  logout(){
    this.auth.logut();
    this.router.navigate(['/login']);
  }

  //creo una funcion que me traiga los datos de la base de datos.
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

}
