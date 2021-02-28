import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [],
})
export class PromesaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

    this.getUsuarios().then( usuario => {
      console.log('Usuarios trae: ', usuario);
    });

    /* const promesa = new Promise( ( resolve, reject ) => {

      if ( false ) {
        resolve('Hola Mundo promesa');
      } else {
        reject('Valió Madres!!!');
      }
      

    });

    promesa.then( (mensaje) => {
      console.log('Hey, la promesa terminó bien: ', mensaje);
    })
    .catch( error => console.log('Lo que valió Madres fue!!! : ', error) );

    console.log('Fin de la promesa Hola Mundo'); */
  }

  getUsuarios() {
    const promesa = new Promise((resolve) => {
      fetch('https://reqres.in/api/users?page=2')
        .then((resp) => resp.json())
        .then((body) => resolve( body.data ));
    });

    return promesa; 
  }
}
