
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  multiplyValue: any;
  observ = new Observable(observer => {
    observer.next();
  });
  constructor() { }

  ngOnInit(): void {}

  multiply(what: number, by: number): any {
    return function () {
      return new Observable(observer => {
        if ((typeof what === 'number' && what) && (typeof by === 'number' && by)) {
          observer.next(what * by);
        } else {
          observer.next('param is not a number');
          observer.error('param is not a number');
        }
      });
    } 
  }

  getValue(what: any, by: any): void {
    this.observ.pipe(this.multiply(+what, +by)).subscribe(observer => {
      this.multiplyValue = observer;
    });
  }

}