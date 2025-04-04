import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { DataService } from '../data.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class CheckPage implements OnInit {
  hasTaken?:boolean;

  constructor(private dataService:DataService) {
    dataService.hasTaken$.subscribe(data => {this.hasTaken = data})
  }

  ngOnInit() {

  }

}
