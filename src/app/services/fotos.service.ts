import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore  }  from  '@angular/fire/compat/firestore' ;
import { Album } from '../shared/usuarios.interface';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  public fotos: UserPhoto[] = [];
  constructor( private afs: AngularFirestore, private storage: AngularFireStorage ) { }

  public async addNewToGallery() {
  // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.fotos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }
    
  // nuevafoto(nombre: string, foto: File, categoria : string ){
  //   let date = new Date();
  //   let fecha = date.toLocaleDateString();
  //   const archivo: Album = {
  //     uid: this.afs.createId(),
  //     nombre: nombre,
  //     fecha: fecha, 
  //     foto:'',
  //     categoria: categoria,
  //  };
   
  //  let pathRef = `fotos/${archivo.nombre}`;
  //  return concat(
  //     this.storage.upload(pathRef, foto).snapshotChanges(),
  //     this.storage.ref(pathRef).getDownloadURL()
  //     .pipe(concatMap(urlFOto => {
  //      archivo.foto = urlFOto;
  //       return this.afs.collection("listados").doc(archivo.uid).set(archivo)
  //     }))
  //   );
  // }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}


