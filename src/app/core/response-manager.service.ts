import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseManagerService {

  public responseObservable = new Subject<any>();

  constructor() { }

  /**
  * Show rel error as itis
  * @param message
  */
   showInfo(message: string, data?: any) {
    this.responseObservable.next({ message, icon: 'info', title: 'Info', data: data});
  }
}
