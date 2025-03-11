import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss'],
  imports: [IonToolbar, IonButtons, IonMenuButton, IonTitle]
})
export class MenuToolbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
