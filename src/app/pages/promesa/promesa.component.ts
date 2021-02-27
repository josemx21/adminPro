import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [
  ]
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const promesa = new Promise( ( resolve, reject ) => {

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

    console.log('Fin de la promesa Hola Mundo');
  }

}
