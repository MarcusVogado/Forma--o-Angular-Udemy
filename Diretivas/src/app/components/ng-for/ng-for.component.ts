import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  public list: Pessoa[] = [

    { name: "Marcus Vogado", idade: 30 },
    { name: "Luciano do Vale", idade: 59 },
    { name: "André Baltiere", idade: 40 }
  ]

  public onClickAddList() {
    this.list.push({ name: "Deusanira", idade: 50 })
  }

  public onClickEventList(event: number) {
    this.list.splice(event,1)
  }
}
class Pessoa {
  name: string;
  idade: number;
  constructor(name: string, idade: number) {
    this.name = name;
    this.idade = idade;
  }
}