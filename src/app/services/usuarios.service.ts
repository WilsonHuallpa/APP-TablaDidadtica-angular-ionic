import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore  }  from  '@angular/fire/compat/firestore' ;
import { Album, Usuario } from '../shared/usuarios.interface';
import { concat, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public user$: Observable<Usuario>;
  constructor( private afs: AngularFirestore, private storage: AngularFireStorage, public afAuth: AngularFireAuth,) { }


  TraerUsuarios(){
    return this.afs.collection<Usuario>('usuarios').valueChanges();
  }

  login(correo: string, password: string){
    
      return this.afAuth.signInWithEmailAndPassword(correo, password);
    
  }
  logut(){
    this.afAuth.signOut();
  }

  registraUsuario(datos: Usuario){
   const password = datos.clave + ''; 
       this.afAuth.createUserWithEmailAndPassword(datos.correo, password);
  }

  stateUser(){
    return this.afAuth.authState;
  }


}
