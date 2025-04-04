import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { homeOutline, checkmarkOutline, flameOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon, IonTabBar, IonTabButton, IonTabs]
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({ homeOutline, checkmarkOutline, flameOutline });
  }

  ngOnInit() {
  }

}
