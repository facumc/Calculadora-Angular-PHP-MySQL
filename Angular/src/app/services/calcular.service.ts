import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  private baseUrl = 'http://localhost/ejercicioToptive/web-services';

  constructor(private http: HttpClient) { }

  postQuery(query: string, body: HttpParams) {
    const url = `${this.baseUrl}/${ query }`;

    return this.http.post(url, body);
  }

  calcular(num1: string, num2: string, ope: string) {
    const body = new HttpParams()
    .set('num1', num1)
    .set('num2', num2)
    .set('ope', ope);
    return this.postQuery('calcular.php', body);
  }

  registrarSesion(calculo: string) {
    const body = new HttpParams()
    .set('calculo', calculo);
    return this.postQuery('registrar-calculo.php', body);
  }

  mostrarHistorial(): Observable<object> {
    return this.http.get(`${this.baseUrl}/listar-sesion.php`);
  }
}
