import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    console.log('Servicios de Configuración inicializado');

     //Grabar preferencia de usuario
     const url = localStorage.getItem( 'theme' ) || './assets/css/colors/default-dark.css' ;

     this.linkTheme.setAttribute('href', url);
   }

   changeTheme( theme: string){
  
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme.setAttribute('href', url);
    //Grabar preferencia de usuario
    localStorage.setItem( 'theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {
  
      elem.classList.remove( 'working' );
  
      const btnTheme = elem.getAttribute('data-theme');
  
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
  
      const currentTheme = this.linkTheme.getAttribute('href');
  
      if(btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  
  }
}
