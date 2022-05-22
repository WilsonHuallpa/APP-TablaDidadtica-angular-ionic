import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteraccionService {

  loading: any;
  constructor(public toastController: ToastController, public loadingController: LoadingController) { }

  async presentToast( message: string, color: string ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      color: color, 
    });
    toast.present();
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
    });
    await this.loading.present();
  }
  async closeLoading() {
  
    await this.loading.dismiss();

  }
}
