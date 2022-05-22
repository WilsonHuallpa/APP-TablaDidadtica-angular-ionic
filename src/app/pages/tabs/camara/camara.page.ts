import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Album } from 'src/app/shared/usuarios.interface';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(public fotoService: FotosService, private fireStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  addfotosToGallery(){
    this.fotoService.addNewToGallery();
  }
 
  subirFoto(){
    const id = Math.random().toString(36).substring(2);
    const files = this.fotoService.fotos;
    const filePath = 'galeria/imagen.png';
    const ref = this.fireStorage.ref(filePath);
    const task =  this.fireStorage.upload(filePath, files);
  }

}
