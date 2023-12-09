import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent implements OnChanges {
  @Input()
  title: string = "Olá Angular"
  ngOnChanges(): void {
console.log("Foi alterado com sucesso")
  }

}
