import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private hasTakenSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private hasTakenKey:string = 'hasTaken';
  hasTaken$ = this.hasTakenSubject.asObservable();
  
  private dateSubject:BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date()); 
  private dateKey:string = 'date';
  date$ = this.dateSubject.asObservable();

  setHasTaken(value: boolean) {
    this.hasTakenSubject.next(value);
    Preferences.set({key: this.hasTakenKey, value: JSON.stringify(value)});
  }

  setDate(value: Date) {
    this.dateSubject.next(value);
    Preferences.set({key: this.dateKey, value: JSON.stringify(value)});
  }

  isSameDay(date1:Date, date2:Date) {
    return date1.getDate() == date2.getDate()
      && date1.getMonth() == date2.getMonth()
      && date1.getFullYear() == date2.getFullYear()
  }

  constructor() {
    // Date
    // Simply getting the value from Preferences and putting it in the BehaviorSubject
    Preferences.get({key: this.dateKey})
      .then(data => {
        let date:string | null = data.value;
        if (date === null) {
          date = JSON.stringify(new Date()); 
          Preferences.set({key: this.dateKey, value: date});
        }
        this.dateSubject.next(new Date(JSON.parse(date)));
      });

    // Has Taken
    // Getting the value from Preferences and putting it in the BehaviorSubject
    // With the exception that if it's a new day, we have to reset hasTaken to false
    Preferences.get({key: this.hasTakenKey})
      .then(data => {
        let hasTaken:string | null = data.value;
        if (hasTaken === null || !this.isSameDay(this.dateSubject.value, new Date())) {
          hasTaken = 'false';
          Preferences.set({key: this.hasTakenKey, value: hasTaken});
        }
        this.hasTakenSubject.next(JSON.parse(hasTaken));
      });
  }
}
