import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario: Usuario;
  public registerFail: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = new Usuario();
    this.registerFail = false;

   }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log("usuario: "+ this.usuario.nombre);
    this.usuarioService.register(this.usuario).subscribe(
      (data) => {
        //console.log(data);
        localStorage.setItem('nombre', this.usuario.nombre);
        this.router.navigate(['/login']);
      },
      (error: Error) => {
        this.registerFail = true;
        console.error("Error al realizar el registro");
      }
    )
  }


}
