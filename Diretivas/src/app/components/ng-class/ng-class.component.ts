import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  public valor: boolean = false

  constructor(){
    setInterval(() => {
      if (this.valor) {
        this.valor = false
      } else {
        this.valor = true
      }
    }, 2000);
  }
  ngOnInit(): void {
   
  }

}


