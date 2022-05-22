import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InteraccionService } from '../services/interaccion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(private authSvc: UsuariosService, private router: Router, public formBuilder: FormBuilder, private interaccion: InteraccionService ) { 
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  ngOnInit() {
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      this.onLogin(this.ionicForm.value.email,this.ionicForm.value.password);
    }
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async onLogin (email, password){
    try {
      this.interaccion.presentLoading("cargando...")
      const user = await this.authSvc.login(email, password);
      if(user){
        this.interaccion.closeLoading();
        this.interaccion.presentToast('Bienvenido!! ', "success" );
        this.redirectUser(true);
      }
    } catch (error) {
      this.interaccion.closeLoading();
      this.interaccion.presentToast('Usuario no existe. ', "danger" );
    }
   }
 

  private redirectUser(isVerified: boolean): void {
    if(isVerified){
      this.router.navigate(['home']);
    }else{
      //this.router.navigate(['verify-email']);
    }
   }
}


