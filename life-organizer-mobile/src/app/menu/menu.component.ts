import { Component, OnInit } from '@angular/core';
import { IonMenu, IonToolbar, IonHeader, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonMenu, IonToolbar, IonHeader, IonTitle, IonContent, IonList, IonItem],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
