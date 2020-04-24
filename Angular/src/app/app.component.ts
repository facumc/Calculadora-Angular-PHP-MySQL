import { Component, ViewChild } from '@angular/core';
import { CalcularService } from './services/calcular.service';
import { Sesion } from './models/session.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ejercicioTopTive';
  @ViewChild('closebutton', {static: false}) closebutton;
  sesion = '';
  session: Sesion = new Sesion();
  newsesion = '';
  numero: string[] = [];
  operacion: string;
  oculto = '';
  resultado = '';
  sesiones: Sesion[] = [];
  suma = true;
  resta = true;
  divi = true;
  multi = true;

  constructor(public calculo: CalcularService) {}

  click(num: string) {
      this.sesion = this.sesion + num;
      this.oculto = this.oculto + num;
      if (this.numero.length < 1) {
        this.suma = true;
        this.resta = true;
        this.divi = true;
        this.multi = true;
      } else {
        this.suma = false;
        this.resta = false;
        this.divi = false;
        this.multi = false;
      }
  }

  clickOpe(ope: string) {
    if (ope === 'suma' && this.sesion !== '' && this.suma === true) {
      this.numero.push(this.sesion);
      this.sesion = this.sesion + '+';
      this.oculto = '';
      this.operacion = 'suma';
      this.suma = false;
    }
    if (ope === '-' && this.sesion !== '' && this.resta === true) {
      this.numero.push(this.sesion);
      this.sesion = this.sesion + ope;
      this.oculto = '';
      this.operacion = 'resta';
      this.resta = false;
    }
    if (ope === '/' && this.sesion !== '' && this.divi === true) {
      this.numero.push(this.sesion);
      this.sesion = this.sesion + ope;
      this.oculto = '';
      this.operacion = 'divide';
      this.divi = false;
    }
    if (ope === '*' && this.sesion !== '' && this.multi === true) {
      this.numero.push(this.sesion);
      this.sesion = this.sesion + ope;
      this.oculto = '';
      this.operacion = 'multi';
      this.multi = false;
    }
  }

  calcular() {
    if (this.sesion !== '') {
      this.numero.push(this.oculto);
      this.calculo.calcular(this.numero[0], this.numero[1], this.operacion).subscribe((resp: any) => {
      this.sesion = this.sesion + ' ' + '=' + ' ' + resp;
      });
    }
  }

  borrar() {
    this.operacion = '';
    this.sesion = '';
    this.oculto = '';
    this.numero = [];
  }

  guardar() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    if (this.sesion !== '') {
      this.newsesion = this.sesion.replace('+', 'mas');
      this.calculo.registrarSesion(this.newsesion).subscribe((resp: any) => {
        Swal.close();
        if (resp.estado !== 'error') {
          Swal.fire({
            allowOutsideClick: true,
            icon: 'success',
            title: resp.mensaje
          });
          this.sesion = '';
          this.oculto = '';
          this.suma = true;
          this.resta = true;
          this.divi = true;
          this.multi = true;
        } else {
          Swal.fire({
            allowOutsideClick: true,
            icon: 'error',
            title: resp.mensaje
          });
        }
    });
    }
  }
  abrir() {
    this.calculo.mostrarHistorial().subscribe((resp: any) => {
      this.sesiones = [];
      this.sesiones = resp;
    });
  }

  seleccionar(nombre: string) {
    this.sesion = nombre;
    this.cerrarModal();
  }

  cerrarModal() {
    this.closebutton.nativeElement.click();
  }
}
