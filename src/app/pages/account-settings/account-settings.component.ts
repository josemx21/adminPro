import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {



  constructor( private _settingsService: SettingsService) { }

  ngOnInit(): void {

    this._settingsService.checkCurrentTheme();
  }

/* Aqui estaba el changeTheme*/ 
changeTheme( theme: string){
  
  this._settingsService.changeTheme( theme );


}

/* Aqui estaba el checkCurrentTheme*/ 



}
