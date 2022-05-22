import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/shared/usuarios.interface';
@Component({
  selector: 'app-listados',
  templateUrl: './listados.page.html',
  styleUrls: ['./listados.page.scss'],
})
export class ListadosPage implements OnInit {

  usuarios: Observable<Usuario[]>;
  // private perfiles: Usuario[] = [];
  constructor( fse: UsuariosService  ) {

    this.usuarios = fse.TraerUsuarios();
   }

  ngOnInit() {
  }



}
