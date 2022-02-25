import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public loginFail: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = new Usuario();
    this.loginFail = false;

   }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log("Usuario: "+ this.usuario.nombre);
    this.usuarioService.login(this.usuario).subscribe(
      (data) => {
        localStorage.setItem('nombre', this.usuario.nombre);
          this.router.navigate(['/login']);
      },
      (error: Error) => {
        this.loginFail = true;
        console.error("Error al realizar el acceso");
      }
    )
  }

}
