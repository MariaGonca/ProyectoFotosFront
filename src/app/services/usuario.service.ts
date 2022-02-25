import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

const API_URL = 'http://localhost:8080/api/v1/';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public login(usuario: Usuario): Observable<any>{
    return this.http.get(API_URL + 'login', {params: {usuario: usuario.nombre, password: usuario.password}});
  }
  public register(usuario: Usuario): Observable<any>{
    return this.http.post(API_URL + 'register', usuario);
  }
  public update(usuario: Usuario): Observable<any>{
    return this.http.put(API_URL + 'usuario/${apellido}', usuario );
  }
  public delete(usuario: Usuario): Observable<any>{
    return this.http.delete(API_URL + 'usuario/${nombre}');
  }
  public getUsuario(usuario: Usuario): Observable<any>{
    return this.http.get(API_URL + 'usuario/${nombre}');
  }
}
