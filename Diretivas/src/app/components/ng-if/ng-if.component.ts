import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  public condition: boolean = true
  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    },2000)
  }
}
