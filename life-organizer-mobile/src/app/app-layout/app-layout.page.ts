import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonContent } from '@ionic/angular/standalone';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { MenuToolbarComponent } from "../menu-toolbar/menu-toolbar.component";


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.page.html',
  styleUrls: ['./app-layout.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, RouterOutlet, MenuComponent, MenuToolbarComponent]
})
export class AppLayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
