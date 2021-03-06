import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'Progressbar', url: 'progress'},
        {titulo: 'Gráfica', url: 'grafica1'},
        {titulo: 'Promesa', url: 'promesa'},
        {titulo: 'rxjs', url: 'rxjs'}
      ]

    }
  ]
  constructor() { }
}
