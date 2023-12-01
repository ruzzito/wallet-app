import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fabOpened = false;

  constructor() { }

  ngOnInit() {
  }

  accionBoton1(event: Event) {
    event.stopPropagation();
    console.log('Botón 1 clickeado');
  }

  accionBoton2(event: Event) {
    event.stopPropagation();
    console.log('Botón 2 clickeado');
  }

  toggleFab() {
    this.fabOpened = !this.fabOpened;
  }

}
